const { payments, analytics } = require("../core/services");
const sentryError = require("../core/error-handler");

const paymentController = {
  create: async (req, res) => {
    try {
      const payment = await payments.create(req.body);
      await analytics.purchase(req.body.billing.email);

      res.send(payment);
    } catch (err) {
      await sentryError(err);
      console.log(err);
      res.status(err.status).send({ error: err.details });
    } finally {
      req.transaction.finish();
    }
  },

  refund: async (req, res) => {
    try {
      const refundBody = req.body[0];
      const refundId = req.body[1].paymentId;
      const refund = await payments.refund(refundBody, refundId);
      res.send(refund);
    } catch (err) {
      await sentryError(err);
      res.status(err.status).send({ error: err });
    } finally {
      req.transaction.finish();
    }
  },
};

module.exports = paymentController;

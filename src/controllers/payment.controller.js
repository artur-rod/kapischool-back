const { payments } = require("../services");

const paymentController = {
  create: async (req, res) => {
    try {
      const payment = await payments.create(req.body);
      res.send(payment);
    } catch (err) {
      res.status(err.status).send({ error: err.details });
    }
  },

  refund: async (req, res) => {
    try {
      const refundBody = req.body[0];
      const refundId = req.body[1].paymentId;
      const refund = await payments.refund(refundBody, refundId);
      res.send(refund);
    } catch (err) {
      res.status(err.status).send({ error: err });
    }
  },
};

module.exports = paymentController;

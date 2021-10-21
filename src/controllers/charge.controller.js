const { charges } = require("../core/services");
const sentryError = require("../core/error-handler");

const chargeController = {
  list: async (req, res) => {
    try {
      const listCharges = await charges.list();
      res.send(listCharges);
    } catch (err) {
      await sentryError(err);
      res.status(err.status).send({ error: err });
    } finally {
      req.transaction.finish();
    }
  },

  create: async (req, res) => {
    try {
      const createCharge = await charges.create(req.body);
      res.send(createCharge);
    } catch (err) {
      await sentryError(err);
      res.status(err.status).send({ error: err });
    } finally {
      req.transaction.finish();
    }
  },

  cancel: async (req, res) => {
    try {
      const cancelation = await charges.cancel(req.body.chargeId);
      res.sendStatus(cancelation);
    } catch (err) {
      await sentryError(err);
      res.status(err.status).send({ error: err });
    } finally {
      req.transaction.finish();
    }
  },
};

module.exports = chargeController;

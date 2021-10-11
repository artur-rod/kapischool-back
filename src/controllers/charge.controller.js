const { charges } = require("../services");

const chargeController = {
  list: async (req, res) => {
    try {
      const listCharges = await charges.list();
      res.send(listCharges);
    } catch (err) {
      res.status(err.status).send({ error: err });
    }
  },

  create: async (req, res) => {
    try {
      const createCharge = await charges.create(req.body);
      res.send(createCharge);
    } catch (err) {
      res.status(err.status).send({ error: err.details[0] });
    }
  },

  cancel: async (req, res) => {
    try {
      const cancelation = await charges.cancel(req.body.chargeId);
      res.sendStatus(cancelation);
    } catch (err) {
      res.status(err.status).send({ error: err });
    }
  },
};

module.exports = chargeController;

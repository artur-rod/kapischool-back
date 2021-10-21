const { address } = require("../core/services");
const sentryError = require("../core/error-handler");

const addressController = {
  get: async (req, res) => {
    try {
      const getAddress = await address.get(req.body);
      res.send(getAddress);
    } catch (err) {
      await sentryError(err);
      res.status(400).send(err);
    } finally {
      req.transaction.finish();
    }
  },
};

module.exports = addressController;

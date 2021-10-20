const { address } = require("../core/services");

const addressController = {
  get: async (req, res) => {
    try {
      const getAddress = await address.get(req.body);
      res.send(getAddress);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  },
};

module.exports = addressController;

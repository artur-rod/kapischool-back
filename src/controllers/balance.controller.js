const { balance } = require("../core/services");
const sentryError = require("../core/error-handler");

const balanceController = {
  list: async (req, res) => {
    const showBalance = await balance.list();

    try {
      res.send(showBalance);
    } catch (err) {
      await sentryError(err);
      res.status(err.status).send({ error: err });
    } finally {
      req.transaction.finish();
    }
  },
};

module.exports = balanceController;

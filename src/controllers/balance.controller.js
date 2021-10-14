const { balance } = require("../core/services");

const balanceController = {
  list: async (req, res) => {
    const showBalance = await balance.list();

    try {
      res.send(showBalance);
    } catch (err) {
      res.status(err.status).send({ error: err });
    }
  },
};

module.exports = balanceController;

const Juno = require("../../vendors/juno");

const balance = {
  list: async () => {
    const balance = await Juno.balance();
    return balance;
  },
};

module.exports = balance;

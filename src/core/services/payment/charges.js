const Juno = require("../../vendors/juno");

const charges = {
  list: async () => {
    const listCharges = await Juno.listCharges();
    return listCharges;
  },

  create: async (body) => {
    const createCharge = await Juno.newCharge(body);
    return createCharge;
  },

  cancel: async (body) => {
    const cancelCharge = await Juno.cancelation(body);
    return cancelCharge;
  },
};

module.exports = charges;

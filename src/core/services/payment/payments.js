const Juno = require("../../vendors/juno");

const payments = {
  create: async (body) => {
    const payment = await Juno.payment(body);
    return payment;
  },

  refund: async (body, id) => {
    const refund = await Juno.refund(body, id);
    return refund;
  },
};

module.exports = payments;

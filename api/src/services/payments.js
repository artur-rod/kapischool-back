const Juno = require("../static/lib/payments/juno");

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

const mailer = require("../../vendors/sendgrid");

const email = {
  registration: async (email) => {
    const registration = await mailer.registration(email);
    return registration;
  },
  purchase: async (email) => {
    const purchase = await mailer.purchase(email);
    return purchase;
  },
};

module.exports = email;

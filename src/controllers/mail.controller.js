const email = require("../core/services/mail/emails");
const sentryError = require("../core/error-handler");

const mailController = {
  registration: async (req, res) => {
    try {
      const registrationMail = await email.registration(req.body);
      res.send(registrationMail);
    } catch (err) {
      await sentryError(err);
      res.status(err.code).send({
        error: err.code,
        message: err.response.body.errors[0].message,
      });
    } finally {
      req.transaction.finish();
    }
  },
  purchase: async (req, res) => {
    try {
      const purchaseMail = await email.purchase(req.body);
      res.send(purchaseMail);
    } catch (err) {
      await sentryError(err);
      res.status(err.code).send({
        error: err.code,
        message: err.response.body.errors[0].message,
      });
    } finally {
      req.transaction.finish();
    }
  },
};

module.exports = mailController;

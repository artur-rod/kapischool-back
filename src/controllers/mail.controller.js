const email = require("../core/services/mail/emails");
const sentryError = require("../core/error-handler");

const mailController = {
  registration: async (req, res) => {
    try {
      await email.registration(req.body);
      res.status(204).send();
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
      await email.purchase(req.body);
      res.status(204).send();
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

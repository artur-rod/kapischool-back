const email = require("../core/services/mail/emails");

const mailController = {
  registration: async (req, res) => {
    try {
      const registrationMail = await email.registration(req.body);
      res.send({ sendgrid: registrationMail });
    } catch (err) {
      res.status(err.status).send({ error: err });
    }
  },
  purchase: async (req, res) => {
    try {
      const purchaseMail = await email.purchase(req.body);
      res.send({ sendgrid: purchaseMail });
    } catch (err) {
      res.status(err.status).send({ error: err });
    }
  },
};

module.exports = mailController;

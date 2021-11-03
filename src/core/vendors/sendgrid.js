const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const email = {
  registration: async (email) => {
    const msg = {
      to: await email,
      from: "artur.rodrigues@linkapi.com.br",
      subject: "KapiSchool Registration",
      text: "Registration Successfull",
      html: "<h2>Registration Successfull</h2>",
    };

    try {
      const mail = await sgMail.send(msg);
      return mail[0];
    } catch (err) {
      throw err;
    }
  },
  purchase: async (email) => {
    const msg = {
      to: await email,
      from: "artur.rodrigues@linkapi.com.br",
      subject: "KapiSchool Course Purchase",
      text: "Purchase Completed... Access our Platform to start your course",
      html: "<h2>Purchase Completed... Access our Platform to start your course</h2>",
    };

    try {
      const mail = await sgMail.send(msg);
      return mail[0];
    } catch (err) {
      throw err;
    }
  },
};

module.exports = email;

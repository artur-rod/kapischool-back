const balance = require("./payment/balance");
const charges = require("./payment/charges");
const payments = require("./payment/payments");

const user = require("./database/user");
const admin = require("./database/admin");
const courses = require("./database/courses");
const profile = require("./database/profile");

const emails = require("./mail/emails");

const address = require("./address/postCode");

module.exports = {
  balance,
  charges,
  payments,
  user,
  admin,
  courses,
  profile,
  emails,
  address,
};

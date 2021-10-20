const balance = require("./balance.controller");
const charges = require("./charge.controller");
const payment = require("./payment.controller");

const user = require("./user-auth.controller");
const admin = require("./admin-auth.controller");
const courses = require("./courses.controller");
const profile = require("./profile.controller");

const email = require("./mail.controller");

const address = require("./address.controller");

module.exports = {
  balance,
  charges,
  payment,
  user,
  admin,
  courses,
  profile,
  email,
  address,
};

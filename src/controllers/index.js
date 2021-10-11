const balance = require("./balance.controller");
const charges = require("./charge.controller");
const payment = require("./payment.controller");

const user = require("./user-auth.controller");
const admin = require("./admin-auth.controller");
const courses = require("./courses.controller");

module.exports = { balance, charges, payment, user, admin, courses };
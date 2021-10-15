const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../../../models/admin");
require("dotenv").config();

function generateToken(params = {}) {
  return jwt.sign(params, process.env.AUTH_CONFIG_SECRET, {
    expiresIn: 10800,
  });
}

const admin = {
  registration: async (data) => {
    const { email } = data;

    if (await Admin.findOne({ email })) {
      return { error: "User already exists" };
    }

    const admin = await Admin.create(data);
    const token = generateToken({ id: admin.id });
    admin.password = undefined;

    return { admin, token };
  },

  login: async (data) => {
    const { email, password } = data;
    const admin = await Admin.findOne({ email }).select("+password");

    if (!admin) {
      return { error: "User not found" };
    }
    if (!(await bcrypt.compare(password, admin.password))) {
      return { error: "Invalid password" };
    }

    const token = generateToken({ id: admin.id });
    admin.password = undefined;

    return { admin, token };
  },
};

module.exports = admin;

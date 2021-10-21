const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../../models/user");
const Profile = require("../../../models/profile");
require("dotenv").config();

function generateToken(params = {}) {
  return jwt.sign(params, process.env.AUTH_CONFIG_SECRET, {
    expiresIn: 10800,
  });
}

const user = {
  registration: async (data) => {
    const { email } = data;

    if (await User.findOne({ email })) {
      throw { error: "User already exists" };
    }
    const user = await User.create(data);
    const token = generateToken({ id: user._id });
    user.password = undefined;

    await Profile.create({ user: user._id });

    return { user, token };
  },

  login: async (data) => {
    const { email, password } = data;
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      throw { error: "User not found" };
    }
    if (!(await bcrypt.compare(password, user.password))) {
      throw { error: "Wrong Password" };
    }

    const token = generateToken({ id: user.id });
    user.password = undefined;

    return { user, token };
  },
};

module.exports = user;

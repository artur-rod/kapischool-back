const { admin } = require("../services");

const adminAuthController = {
  registration: async (req, res) => {
    try {
      const register = await admin.registration(req.body);
      res.send(register);
    } catch (err) {
      return res.status(400).send({ error: "Registration Failed" });
    }
  },

  login: async (req, res) => {
    try {
      const login = await admin.login(req.body);
      res.send(login);
    } catch (err) {
      return res.status(400).send({ error: "Login error" });
    }
  },
};

module.exports = adminAuthController;

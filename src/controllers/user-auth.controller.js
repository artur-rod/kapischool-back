const { user } = require("../core/services");

const userAuthController = {
  registration: async (req, res) => {
    try {
      const register = await user.registration(req.body);
      res.send(register);
    } catch (err) {
      console.log(err);
      return res.status(400).send({ error: err.data });
    }
  },

  login: async (req, res) => {
    try {
      const login = await user.login(req.body);
      res.send(login);
    } catch (err) {
      return res.status(400).send({ error: "Login error" });
    }
  },
};

module.exports = userAuthController;

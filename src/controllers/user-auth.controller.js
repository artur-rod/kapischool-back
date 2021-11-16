const { user, analytics } = require("../core/services");
const sentryError = require("../core/error-handler");

const userAuthController = {
  registration: async (req, res) => {
    try {
      const register = await user.registration(req.body);
      await analytics.register(register.user.email);

      res.send(register);
    } catch (err) {
      await sentryError(err);
      res.status(400).send(err);
    } finally {
      req.transaction.finish();
    }
  },

  login: async (req, res) => {
    try {
      const login = await user.login(req.body);
      await analytics.login(login.user.email);

      res.send(login);
    } catch (err) {
      await sentryError(err);
      res.status(400).send(err);
    } finally {
      req.transaction.finish();
    }
  },
};

module.exports = userAuthController;

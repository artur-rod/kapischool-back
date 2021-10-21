const { admin } = require("../core/services");
const sentryError = require("../core/error-handler");

const adminAuthController = {
  registration: async (req, res) => {
    try {
      const register = await admin.registration(req.body);
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
      const login = await admin.login(req.body);
      res.send(login);
    } catch (err) {
      await sentryError(err);
      res.status(400).send(err);
    } finally {
      req.transaction.finish();
    }
  },
};

module.exports = adminAuthController;

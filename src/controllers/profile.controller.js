const { profile } = require("../core/services");
const sentryError = require("../core/error-handler");

const profileController = {
  coursesUpdate: async (req, res) => {
    try {
      const update = await profile.coursesUpdate(req.body);
      res.send(update);
    } catch (err) {
      await sentryError(err);
      res.status(400).send(err);
    } finally {
      req.transaction.finish();
    }
  },

  deleteCourse: async (req, res) => {
    try {
      const deletion = await profile.deleteCourse(req.body);
      res.send(deletion);
    } catch (err) {
      await sentryError(err);
      res.status(400).send(err);
    } finally {
      req.transaction.finish();
    }
  },

  addressUpdate: async (req, res) => {
    try {
      const update = await profile.addressUpdate(req.body);
      res.send(update);
    } catch (err) {
      await sentryError(err);
      res.status(400).send(err);
    } finally {
      req.transaction.finish();
    }
  },

  show: async (req, res) => {
    try {
      const showProfile = await profile.show(req.body);
      res.send(showProfile);
    } catch (err) {
      await sentryError(err);
      res.status(400).send(err);
    } finally {
      req.transaction.finish();
    }
  },
};

module.exports = profileController;

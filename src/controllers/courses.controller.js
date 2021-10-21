const { courses } = require("../core/services");
const sentryError = require("../core/error-handler");

const coursesController = {
  create: async (req, res) => {
    try {
      const courseCreation = await courses.create(req.body);
      res.send(courseCreation);
    } catch (err) {
      await sentryError(err);
      res.status(400).send(err);
    } finally {
      req.transaction.finish();
    }
  },

  showAll: async (req, res) => {
    try {
      const coursesList = await courses.showAll();
      res.send(coursesList);
    } catch (err) {
      await sentryError(err);
      res.status(400).send(err);
    } finally {
      req.transaction.finish();
    }
  },
};

module.exports = coursesController;

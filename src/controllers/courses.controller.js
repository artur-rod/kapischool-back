const { courses } = require("../core/services");

const coursesController = {
  create: async (req, res) => {
    try {
      const courseCreation = await courses.create(req.body);
      res.send(courseCreation);
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  },

  showAll: async (req, res) => {
    try {
      const coursesList = await courses.showAll();
      res.send(coursesList);
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  },
};

module.exports = coursesController;

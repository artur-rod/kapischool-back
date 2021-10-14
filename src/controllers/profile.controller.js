const { profile } = require("../services");

const profileController = {
  coursesUpdate: async (req, res) => {
    try {
      const update = await profile.coursesUpdate(req.body);
      res.send(update);
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  },

  addressUpdate: async (req, res) => {
    try {
      const update = await profile.addressUpdate(req.body);
      res.send(update);
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  },

  show: async (req, res) => {
    try {
      const showProfile = await profile.show(req.body);
      res.send(showProfile);
    } catch (err) {
      res.status(400).send({ error: err.message });
    }
  },
};

module.exports = profileController;

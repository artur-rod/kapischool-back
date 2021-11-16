const { analytics } = require("../core/services");
const sentryError = require("../core/error-handler");

const analyticsController = {
  events: async (req, res) => {
    try {
      const listEvents = await analytics.events();
      res.send(listEvents);
    } catch (err) {
      await sentryError(err);
      res.status(400).send(err);
    } finally {
      req.transaction.finish();
    }
  },
};

module.exports = analyticsController;

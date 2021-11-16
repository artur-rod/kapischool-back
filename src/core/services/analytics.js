const mixpanel = require("../vendors/mixpanel");

const analytics = {
  login: async () => {
    const loginEvent = await mixpanel.loginEvent();
    return loginEvent;
  },

  register: async () => {
    const registerEvent = await mixpanel.registerEvent();
    return registerEvent;
  },

  purchase: async () => {
    const purchaseEvent = await mixpanel.purchaseEvent();
    return purchaseEvent;
  },

  events: async () => {
    const topEvents = await mixpanel.topEvents();
    return topEvents;
  },
};

module.exports = analytics;

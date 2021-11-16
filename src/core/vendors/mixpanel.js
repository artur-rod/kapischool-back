const axios = require("axios");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const { baseURL, projectId, apiKey } = {
  baseURL: process.env.MIXPANEL_INGESTION_URL,
  projectId: process.env.MIXPANEL_PROJECT_ID,
  apiKey: process.env.MIXPANEL_API_KEY,
};

function body(userEmail, event) {
  return [
    {
      properties: {
        time: Date.now(),
        distinct_id: userEmail,
        $insert_id: uuidv4(),
      },
      event: event,
    },
  ];
}

const mixpanel = {
  ingestionRequest: async () => {
    const instance = axios.create({
      baseURL: baseURL,
      params: {
        project_id: projectId,
        apiKey: apiKey,
      },
    });
    return instance;
  },

  queryRequest: async () => {
    const instance = axios.create({
      baseURL: baseURL,
      params: {
        apiKey: apiKey,
      },
    });
    return instance;
  },

  loginEvent: async (distinctId) => {
    try {
      const ingestionRequest = await mixpanel.ingestionRequest();

      const response = await ingestionRequest.post(
        "/import",
        body(distinctId, "Login")
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  registerEvent: async (distinctId) => {
    try {
      const ingestionRequest = await mixpanel.ingestionRequest();

      const response = await ingestionRequest.post(
        "/import",
        body(distinctId, "Register")
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  purchaseEvent: async (distinctId) => {
    try {
      const ingestionRequest = await mixpanel.ingestionRequest();

      const response = await ingestionRequest.post(
        "/import",
        body(distinctId, "Purchase")
      );
      return response.data;
    } catch (err) {
      throw err;
    }
  },

  topEvents: async () => {
    try {
      const queryRequest = await mixpanel.queryRequest();

      const response = await queryRequest.get("/events/top");
      return response.data;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = mixpanel;

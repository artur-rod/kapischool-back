const axios = require("axios");
require("dotenv").config();

const config = {
  URL_auth: process.env.URL_AUTH,
  URL_api: process.env.URL_API,
  client_Id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  resource_token: process.env.RESOURCE_TOKEN,
};

const Juno = {
  getAuthToken: async () => {
    const basicCredentials = Buffer.from(
      `${config.client_Id}:${config.client_secret}`
    ).toString("base64");

    const instance = axios.create({
      baseURL: config.URL_auth,
      headers: {
        Authorization: `Basic ${basicCredentials}`,
      },
    });

    let params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    try {
      const response = await instance.post("/oauth/token", params);
      return response.data.access_token;
    } catch (error) {
      throw error;
    }
  },

  baseRequest: async () => {
    const bearerToken = await Juno.getAuthToken();
    const instance = await axios.create({
      baseURL: config.URL_api,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "X-Api-Version": 2,
        "X-Resource-Token": `${config.resource_token}`,
        "Content-type": "application/json",
      },
    });
    return instance;
  },

  // Testes de requisições gerais (BALANCE e TRANSFERENCE)

  balance: async () => {
    const baseRequest = await Juno.baseRequest();

    try {
      const response = await baseRequest.get("/balance");
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  transference: async (body) => {
    const baseRequest = await Juno.baseRequest();

    try {
      const response = await baseRequest.post("/transfers", body);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Payment area

  newCardId: async (body) => {
    const baseRequest = await Juno.baseRequest();

    try {
      const response = await baseRequest.post(
        "/credit-cards/tokenization",
        body
      );
      return response.data.creditCardId;
    } catch (error) {
      throw error;
    }
  },

  newCharge: async (body) => {
    const baseRequest = await Juno.baseRequest();

    try {
      const response = await baseRequest.post("/charges", body);
      return response.data._embedded.charges[0];
    } catch (error) {
      throw error.response.data;
    }
  },

  payment: async (body) => {
    const baseRequest = await Juno.baseRequest();

    try {
      const response = await baseRequest.post("/payments", body);
      return response.data.payments[0];
    } catch (error) {
      throw error.response.data;
    }
  },

  refund: async (body, id) => {
    const baseRequest = await Juno.baseRequest();

    try {
      const response = await baseRequest.post(`/payments/${id}/refunds`, body);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  cancelation: async (id) => {
    const baseRequest = await Juno.baseRequest();

    try {
      const response = await baseRequest.put(`/charges/${id}/cancelation`);
      return response.status;
    } catch (error) {
      throw error.response.data;
    }
  },

  // Área de Charges (LIST and CONSULT)

  listCharges: async () => {
    const baseRequest = await Juno.baseRequest();

    let params = new URLSearchParams();
    params.append("orderBy", "id");

    try {
      const response = await baseRequest.get("/charges");
      return response.data._embedded.charges;
    } catch (error) {
      throw error;
    }
  },

  consultCharge: async (id) => {
    const baseRequest = await Juno.baseRequest();

    try {
      const response = await baseRequest.get(`/charges/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = Juno;
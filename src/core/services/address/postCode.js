const CEP = require("../../vendors/correios");

const postCode = {
  get: async (cep) => {
    const getPostCode = await CEP.postCode(cep);
    return getPostCode;
  },
};

module.exports = postCode;

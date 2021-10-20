const soap = require("soap");
require("dotenv").config();

const consultaCEP = {
  async postCode(cep) {
    const url = process.env.CORREIOS_API_URL;

    try {
      const correios = await soap.createClientAsync(url);
      const getCEP = await correios.consultaCEPAsync(cep);

      return getCEP[0].return;
    } catch (err) {
      return { error: err };
    }
  },
};

module.exports = consultaCEP;

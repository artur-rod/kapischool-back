const axios = require("axios");
const parser = require("xml2json");
require("dotenv").config();

const consultaCEP = {
  async postCode(body) {
    const url = process.env.CORREIOS_API_URL;
    const cep = body.cep.toString();

    const request = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
                      <soapenv:Body>
                        <consultaCEP xmlns="http://cliente.bean.master.sigep.bsb.correios.com.br/">
                          <cep xmlns="">"${cep}"</cep>
                        </consultaCEP>
                      </soapenv:Body>
                    </soapenv:Envelope>`;

    try {
      const { data } = await axios.post(url, request);

      const response = JSON.parse(parser.toJson(data));
      console.log(typeof response);
      return response["soap:Envelope"];
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = consultaCEP;

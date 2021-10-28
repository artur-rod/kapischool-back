const axios = require("axios").default;
const xmlToJson = require("xml-to-json-stream");
const parser = xmlToJson({ attributeMode: false });
require("dotenv").config();

const consultaCEP = {
  async postCode(body) {
    const url = process.env.CORREIOS_API_URL;
    const cep = body.cep.toString();

    const request = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
      <soapenv:Body>
        <consultaCEP xmlns="http://cliente.bean.master.sigep.bsb.correios.com.br/">
          <cep xmlns="">"${cep}"</cep>
        </consultaCEP>
      </soapenv:Body>
    </soapenv:Envelope>`;

    try {
      const { data } = await axios.post(url, request, {
        headers: {
          "Content-type": "text/xml;charset=utf-8",
        },
      });

      const response = parser.xmlToJson(data, (error, json) => {
        if (error) throw error;
        return json;
      });
      return response["soap:Envelope"]["soap:Body"]["ns2:consultaCEPResponse"]
        .return;
    } catch (err) {
      throw err;
    }
  },
};

module.exports = consultaCEP;

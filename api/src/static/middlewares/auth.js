const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization; //recebe o token

  if (!authHeader) {
    return res.status(401).send({ error: "No token provided" });
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return res.status(401).send({ error: "Token error" });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: "Token malformated" });
  }

  jwt.verify(token, process.env.AUTH_CONFIG_SECRET, async (err, decoded) => {
    if (err) return res.status(401).send({ error: "Invalid Token" });

    userId = await decoded.id;
    return next();
  });
};
const { Router } = require("express");
const { address } = require("../controllers");

const router = Router();

router.post("/", address.get);

module.exports = router;

const { Router } = require("express");
const { email } = require("../controllers");

const router = Router();

router.post("/registration", email.registration);
router.post("/purchase", email.purchase);

module.exports = router;

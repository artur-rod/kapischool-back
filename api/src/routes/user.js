const { Router } = require("express");
const { user } = require("../controllers");

const router = Router();

router.post("/register", user.registration);
router.post("/login", user.login);

module.exports = router;

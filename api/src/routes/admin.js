const { Router } = require("express");
const { admin } = require("../controllers");

const router = Router();

router.post("/register", admin.registration);
router.post("/login", admin.login);

module.exports = router;

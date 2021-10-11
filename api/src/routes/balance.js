const { Router } = require("express");
const { balance } = require("../controllers");
const authMiddleware = require("../static/middlewares/auth");

const router = Router();

router.use(authMiddleware);

router.get("/", balance.list);

module.exports = router;

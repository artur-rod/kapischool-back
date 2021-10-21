const { Router } = require("express");
const { balance } = require("../controllers");
const authMiddleware = require("../static/middlewares/auth");
const sentryMiddleware = require("../static/middlewares/sentry");

const router = Router();

router.use(sentryMiddleware);
router.use(authMiddleware);

router.get("/", balance.list);

module.exports = router;

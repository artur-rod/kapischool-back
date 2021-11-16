const { Router } = require("express");
const { analytics } = require("../controllers");
const sentryMiddleware = require("../static/middlewares/sentry");

const router = Router();

router.use(sentryMiddleware);

router.get("/", analytics.events);

module.exports = router;

const { Router } = require("express");
const { user } = require("../controllers");
const sentryMiddleware = require("../static/middlewares/sentry");

const router = Router();

router.use(sentryMiddleware);

router.post("/register", user.registration);
router.post("/login", user.login);

module.exports = router;

const { Router } = require("express");
const { admin } = require("../controllers");
const sentryMiddleware = require("../static/middlewares/sentry");

const router = Router();

router.use(sentryMiddleware);

router.post("/register", admin.registration);
router.post("/login", admin.login);

module.exports = router;

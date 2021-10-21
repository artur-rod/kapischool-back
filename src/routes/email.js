const { Router } = require("express");
const { email } = require("../controllers");

const sentryMiddleware = require("../static/middlewares/sentry");

const router = Router();

router.use(sentryMiddleware);

router.post("/registration", email.registration);
router.post("/purchase", email.purchase);

module.exports = router;

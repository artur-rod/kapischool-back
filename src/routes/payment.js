const { Router } = require("express");
const { payment } = require("../controllers");
const authMiddleware = require("../static/middlewares/auth");
const sentryMiddleware = require("../static/middlewares/sentry");

const router = Router();

router.use(sentryMiddleware);
router.use(authMiddleware);

router.post("/", payment.create);
router.post("/refund", payment.refund);

module.exports = router;

const { Router } = require("express");
const { address } = require("../controllers");
const sentryMiddleware = require("../static/middlewares/sentry");

const router = Router();

router.use(sentryMiddleware);


router.post("/", address.get);

module.exports = router;

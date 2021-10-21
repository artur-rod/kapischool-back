const { Router } = require("express");
const { charges } = require("../controllers");
const authMiddleware = require("../static/middlewares/auth");
const sentryMiddleware = require("../static/middlewares/sentry");

const router = Router();

router.use(sentryMiddleware);
router.use(authMiddleware);

router.get("/", charges.list);
router.post("/", charges.create);
router.put("/cancelation", charges.cancel);

module.exports = router;

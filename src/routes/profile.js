const { Router } = require("express");
const { profile } = require("../controllers");
const authMiddleware = require("../static/middlewares/auth");
const sentryMiddleware = require("../static/middlewares/sentry");

const router = Router();

router.use(sentryMiddleware);
router.use(authMiddleware);

router.get("/", profile.show);
router.post("/address", profile.addressUpdate);
router.post("/courses", profile.coursesUpdate);

module.exports = router;

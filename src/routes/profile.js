const { Router } = require("express");
const { profile } = require("../controllers");
const authMiddleware = require("../static/middlewares/auth");
const sentryMiddleware = require("../static/middlewares/sentry");

const router = Router();

router.use(sentryMiddleware);
router.use(authMiddleware);

router.post("/", profile.show);
router.post("/address", profile.addressUpdate);
router.post("/courses", profile.coursesUpdate);
router.put("/courses", profile.deleteCourse);

module.exports = router;

const { Router } = require("express");
const { courses } = require("../controllers");
const authMiddleware = require("../static/middlewares/auth");
const sentryMiddleware = require("../static/middlewares/sentry");

const router = Router();

router.use(sentryMiddleware);

router.post("/", courses.create);
router.get("/", courses.showAll);

module.exports = router;

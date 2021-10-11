const { Router } = require("express");
const { courses } = require("../controllers");
const authMiddleware = require("../static/middlewares/auth");

const router = Router();

router.use(authMiddleware);

router.post("/", courses.create);
router.get("/", courses.showAll);

module.exports = router;

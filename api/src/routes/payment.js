const { Router } = require("express");
const { payment } = require("../controllers");
const authMiddleware = require("../static/middlewares/auth");

const router = Router();

router.use(authMiddleware);

router.post("/", payment.create);
router.post("/refund", payment.refund);

module.exports = router;

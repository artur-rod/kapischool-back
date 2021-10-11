const { Router } = require("express");
const { charges } = require("../controllers");
const authMiddleware = require("../static/middlewares/auth");

const router = Router();

router.use(authMiddleware);

router.get("/", charges.list);
router.post("/", charges.create);
router.put("/cancelation", charges.cancel);

module.exports = router;

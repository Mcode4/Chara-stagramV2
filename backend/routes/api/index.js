const router = require("express").Router();

router.use("/users", require("./users"))
router.use("/posts", require("./posts"))
router.use("/followers", require("./followers"))


module.exports = router


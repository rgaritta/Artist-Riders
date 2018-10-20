const router = require("express").Router();
const riderRoutes = require("./rider");

// Book routes
router.use("/rider", riderRoutes);

module.exports = router;

module.exports = function (passport) {

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);
router.use("/auth",require("./authRoutes.js")(passport));
router.use("/api",require("./apiRoutes.js")(passport));

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

return router;
};

// module.exports = router;

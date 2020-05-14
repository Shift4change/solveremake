const router = require("express").Router();
const path = require("path");

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

// router.use(function(req, res) {
//     res.sendFile(path.join(__dirname, "client/public/index.html"));
//   });

router.route("/api/contact")
.post((req, res) => {
    console.log('hello')
});

module.exports = router;
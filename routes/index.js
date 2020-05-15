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
    // console.log(req.body)
    res.json("body", req.body);
});


// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'youremail@gmail.com',
//     pass: 'yourpassword'
//   }
// });

// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

module.exports = router;
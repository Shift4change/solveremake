const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const nodemailer = require("nodemailer");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/solveremake",
//   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// );

app.post("/api/contact", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'solvestaking@gmail.com',
      pass: process.env.EMAIL_PASS
    }
  });

  var mailOptions = {
    from: 'solvestaking@gmail.com',
    to: 'solvestaking@gmail.com',
    subject: `Solve Staking Contact from ${req.body.name}`,
    text: `Name: ${req.body.name} \n \nEmail: ${req.body.email} \n \nMessage: ${req.body.message}`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      throw new Error(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
    res.json(req.body)
  });
})

// app.use(routes);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

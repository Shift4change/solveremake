const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
app.use(cors())
require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// if (process.env.NODE_ENV === "development") {
//   app.use(express.static("client/public"));
// }

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/solveremake",
//   { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
// );

app.get("/api/contacts", (req, res) => {
  console.log('hello');
})

// app.use(routes)

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

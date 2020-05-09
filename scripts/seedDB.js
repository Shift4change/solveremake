const mongoose = require('mongoose');
const db = require('../models');
// mongoose.connect(
//     process.env.MONGODB_URI || "mongodb://Paul:123456A@ds135797.mlab.com:35797/heroku_rhsl61z5"
//     );

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/solveremake",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  );

const exampleUser = [
    {
        first_name: "Bob",
        last_name: "Dylan",
        email: "bobdylan@bobdylan.com",
        password: "12345678",
        // date: new Date(Date.now())
    }
]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(exampleUser))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// module.exports = exampleUser;

const express = require("express");
const mongoose = require("mongoose");
const Routes = require("./routes/routes");

const app = express();

const port = process.env.PORT || 5000;

Routes(app);

// mongoose.connect(
//   keys.mongoURI,
//   { useNewUrlParser: true }
// );

app.listen(port, () => {
  console.log("Express is listening on port: " + port);
});

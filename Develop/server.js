//requring different libraies 
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
// connect to local host
const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// connecting to mongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout", { useNewUrlParser: true });

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
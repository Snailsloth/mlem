const env = process.env.NODE_ENV || "development";

const config = require("./secret")[env];
// var https = require('https');
const express = require("express");
const router = express.Router();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const helmet = require("helmet");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(
  helmet.hsts({
    includeSubDomains: false
  })
);
app.use(express.static(path.join(__dirname, "client/build")));

// app.get("/", (req, res) => {
//   res.status(200).send("Ok");
// });

//routes
const gitRoute = require("./routes/git");
app.use("/git", gitRoute);
const twitterRoute = require("./routes/twitter");
app.use("/twitter", twitterRoute);

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = config.server.port;
app.listen(port, () => console.log(`Mleming on port ${port}!`));

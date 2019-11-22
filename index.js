const env = process.env.NODE_ENV || "development";

const config = require("./secret")[env];
let https = require("https");
const express = require("express");
// const router = express.Router();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const helmet = require("helmet");

const app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));

// Add headers
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader("Access-Control-Allow-Methods", "GET");

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Pass to next layer of middleware
  next();
});
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

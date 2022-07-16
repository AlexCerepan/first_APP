const express = require("express");
const cookieParser = require("cookie-parser");
const serverLogger = require("easy-log")("app:server", { colorCode: 200 });
const cors = require("cors");
var app = express();

app.use((req, res, next) => {
  serverLogger("${req.method} - ${req.originalUrl}");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res, next) => {
  res.send("hello world");
});

module.exports = app;

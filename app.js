const { static } = require("express");
const express = require("express");
const path = require("path");

const rootDirectory = require("./helpers/path");

const app = express();

app.use(static("./public"));

app.get("/users", (req, res) => {
  res.sendFile(path.join(rootDirectory, "html", "users.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(rootDirectory, "html", "root.html"));
});

app.listen(3000);
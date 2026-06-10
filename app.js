const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("OIDC + SSM + Teams CI/CD Working 🚀");
});

module.exports = app;

const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const { exec } = require("child_process");

app.get("/api", (req, res) => {
  exec("npx playwright test", (error, stdout, stderr) => {
    try {
      const result = JSON.parse(stdout);
      res.json(result.suites);
      console.log('Test done!')
    } catch (e) {
      res.status(500).json({ error: "Error parsing stdout to JSON" });
      console.log('Test failed!')
    }
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(process.env.PORT || 3000, () => console.log("Server running"));

module.exports = app;

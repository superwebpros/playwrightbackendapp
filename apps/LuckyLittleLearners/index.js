const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const { exec } = require("child_process");

app.get("/run", (req, res) => {
  exec("npx playwright test", (error, stdout, stderr) => {
    try {
      const result = JSON.parse(stdout);
      res.json(result.suites);
      console.log("Test done!");
    } catch (e) {
      res.status(500).json({
        error: `Error parsing stdout to JSON: ${e}, stdout: ${stdout}`,
      });
      console.log("Test failed!");
    }
  });
});

app.get("/run/:id", async (req, res) => {
  const params = req.params.id;
  const allTestList = require("./tests/AllTestList/allTestList");
  if (!allTestList[params])
    return res.json({ testName: params, status: "not found" });
  try {
    await allTestList[params]();
    res.json({ testName: params, status: "successfully completed" });
  } catch (error) {
    console.log(error);
    res.json({ testName: params, status: error, error: `${error.message}` });
  }
});

app.get("/", (req, res) => {
  res.send("Welcome to TestSuite!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => console.log("Server running"));

module.exports = app;

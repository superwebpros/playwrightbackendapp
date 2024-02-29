const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const { spawn } = require("child_process");

app.get("/api", (req, res) => {
  const child = spawn("npx", ["playwright", "test"], {
    stdio: ["inherit", "pipe", "pipe"],
  });

  let output = "";

  child.stdout.on("data", (data) => {
    output += data.toString();
  });

  child.stderr.on("data", (data) => {
    console.error(`Error from child process: ${data}`);
  });

  child.on("exit", (code, signal) => {
    // if (code === 0) {
      try {
        const result = JSON.parse(output);
        res.json(result.suites);
        console.log("Test done!");
      } catch (e) {
        res.status(500).json({ error: `Error parsing output to JSON: ${e}` });
        console.error("Failed to parse test results:", output);
      }
    // } else {
    //   res.status(500).json({ error: `Playwright test failed with code ${code}` });
    //   console.error("Playwright test failed:", output);
    // }
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => console.log("Server running"));

module.exports = app;

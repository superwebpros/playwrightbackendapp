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

  child.on("exit", async (code, signal) => {
    // try {
        const output = await new Promise((resolve, reject) => {
          let data = "";
          child.stdout.on("data", (chunk) => (data += chunk.toString()));
          child.on("error", reject);
          child.on("close", () => resolve(data));
        });
    
        const result = JSON.parse(output);
        res.json(result.suites);
        console.log("Test done!");
    //   } catch (error) {
    //     res.status(500).json({ error: `Error: ${error}, output: ${output}` });
    //     console.error("Failed to parse test results:", output);
    //   }
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => console.log("Server running"));

module.exports = app;

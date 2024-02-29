const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const { exec } = require("child_process");
const runTests = require("./formatTest/test");
// app.get("/api", (req, res) => {
//   exec("npx playwright test", (error, stdout, stderr) => {
//     try {
//       const result = JSON.parse(stdout);
//       res.json(result.suites);
//       console.log('Test done!')
//     } catch (e) {
//       res.status(500).json({ error: `Error parsing stdout to JSON: ${e}, stdout: ${stdout}` });
//       console.log('Test failed!')
//     }
//   });
// });

app.get("/run", async (req, res) => {
  try {
    await runTests();
    res.send("Tests completados con éxito");
  } catch (error) {
    res.status(500).send("Error al ejecutar los tests: " + error.message);
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => console.log("Server running"));

module.exports = app;

const { chromium } = require("playwright");

const runTests = async () => {
  // Lanzar el navegador
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Ejecutar las pruebas
  await page.goto("https://savat.ar/");

  // Cerrar el navegador
  await browser.close();
};

// Ejecutar las pruebas
// runTests().catch((err) => console.error(err));
module.exports = runTests;

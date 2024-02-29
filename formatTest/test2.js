const { chromium } = require("playwright");
const { test, expect } = require('@playwright/test');

const runTests = async () => {
  // Lanzar el navegador
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Ejecutar las pruebas
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);

  // Cerrar el navegador
  await browser.close();
};

// Ejecutar las pruebas
// runTests().catch((err) => console.error(err));
module.exports = runTests;

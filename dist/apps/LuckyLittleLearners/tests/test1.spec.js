"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { chromium } = require("playwright");
const runTests = async () => {
    // Lanzar el navegador
    const browser = await chromium.launch();
    const page = await browser.newPage();
    // Ejecutar las pruebas
    await page.goto("https://staging-shop.luckylittlelearners.com/");
    await page.goto("https://staging-shop.luckylittlelearners.com/shop-library");
    await page.goto("https://staging-shop.luckylittlelearners.com/membership-shop");
    await page.goto("https://staging-shop.luckylittlelearners.com/membership-library");
    // Cerrar el navegador
    await browser.close();
};
// Ejecutar las pruebas
// runTests().catch((err) => console.error(err));
module.exports = runTests;
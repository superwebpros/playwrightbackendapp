"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)("test", async ({ page }) => {
    await page.goto("https://staging-shop.luckylittlelearners.com/");
    await page.goto("https://staging-shop.luckylittlelearners.com/shop-library");
    await page.goto("https://staging-shop.luckylittlelearners.com/membership-shop");
    await page.goto("https://staging-shop.luckylittlelearners.com/membership-library");
});

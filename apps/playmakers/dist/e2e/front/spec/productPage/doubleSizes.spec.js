"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("is showing footwear correctly with two sizes", async ({ page }) => {
        await page.goto(`${frontUrl_1.default}/collections/all`, { waitUntil: "networkidle" });
        await page.getByRole("button", { name: "Gender" }).click();
        await page.getByRole("button", { name: "Unisex" }).click();
        await page.getByRole("button", { name: "Product Type" }).click();
        await page.getByRole("button", { name: "footwear" }).click();
        await page.getByRole('button', { name: 'Size' }).click();
        await page.getByRole('button', { name: 'M 5 / W' }).click();
        await page.waitForTimeout(1500);
        const data = await page.getByTestId("hit").first().allInnerTexts();
        await page.getByTestId("hit").first().click();
        await page.waitForLoadState("networkidle");
        const sizeData = await page.getByTestId("size").first().allInnerTexts();
        (0, test_1.expect)(sizeData[0]).toContain("M");
        (0, test_1.expect)(sizeData[0]).toContain("W");
        await page.close();
    });
}
exports.default = createTest;

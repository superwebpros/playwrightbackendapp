"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("shows correctly", async ({ page }) => {
        await page.goto(`${frontUrl_1.default}/collections/all`, { waitUntil: "networkidle" });
        await page.getByRole("button", { name: "Product Type" }).click();
        await page.waitForLoadState("networkidle");
        await page.getByRole("button", { name: "footwear" }).click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(2000);
        const hit = await page.getByTestId("hit").first().allTextContents();
        console.log("hit", hit);
        await page.getByTestId("hit").first().click();
        await page.waitForLoadState("networkidle");
        await (0, test_1.expect)(page.getByRole("button", { name: "sizeChartRuler Size Chart" })).toBeVisible();
        await page
            .getByRole("button", { name: "sizeChartRuler Size Chart" })
            .click();
        await page.waitForSelector("iframe");
        let iframeElement = await page.$("iframe");
        let iframeSrc = await iframeElement.getAttribute("src");
        await (0, test_1.expect)(iframeSrc).toContain("https://www.cognitoforms.com");
        console.log("iframeSrc", iframeSrc);
        await page.goto(`${frontUrl_1.default}/collections/all`, { waitUntil: "networkidle" });
        await page.getByRole("button", { name: "Product Type" }).click();
        await page.waitForLoadState("networkidle");
        await page.getByRole("button", { name: "apparel" }).click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(1000);
        await page.getByTestId("hit").first().click();
        await page.waitForLoadState("networkidle");
        await page.waitForTimeout(1000);
        await (0, test_1.expect)(page.getByRole("button", { name: "sizeChartRuler Size Chart" })).toBeVisible();
        await page
            .getByRole("button", { name: "sizeChartRuler Size Chart" })
            .click();
        await page.waitForSelector("iframe");
        iframeElement = await page.$("iframe");
        iframeSrc = await iframeElement.getAttribute("src");
        await (0, test_1.expect)(iframeSrc).toContain("https://www.cognitoforms.com");
        console.log("iframeSrc", iframeSrc);
        await page.close();
    });
}
exports.default = createTest;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("searches", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all");
        await page.waitForLoadState();
        const searchBox = await page.waitForSelector('[data-testid="shopSearchBox"]');
        const isVisible = await searchBox.isVisible();
        (0, test_1.expect)(isVisible).toBe(true);
        await searchBox.click();
        const inputField = await searchBox.$('input[type="search"]');
        if (inputField === null) {
            throw new Error("Input field not found within the search box.");
        }
        await inputField.fill("SWP test value");
        await page.waitForURL(`**/collections/all?q=SWP%20test%20value`);
        const currentURL = page.url();
        (0, test_1.expect)(currentURL).toContain("?q=SWP%20test%20value");
    });
}
exports.default = createTest;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("Carousel has uniques products", async ({ page }) => {
        await page.goto(`${frontUrl_1.default}/collections/all`, { waitUntil: "networkidle" });
        await page.getByTestId("hit").first().click();
        await page.waitForLoadState("networkidle");
        await (0, test_1.expect)(page.getByTestId("frequentlyCarousel")).toBeVisible();
        const all = await page.getByTestId("cardCarousel").all();
        for (let i = 0; i < all.length; i++) {
            for (let j = i + 1; j < all.length; j++) {
                await (0, test_1.expect)(all[i].textContent()).not.toBe(all[j].textContent());
            }
        }
    });
}
exports.default = createTest;

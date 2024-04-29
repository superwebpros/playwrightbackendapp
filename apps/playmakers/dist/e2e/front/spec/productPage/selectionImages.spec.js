"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("principal img change when clic on secondaries imgs", async ({ page }) => {
        await page.goto(`${frontUrl_1.default}`);
        await page.getByPlaceholder("I'm shopping for").click();
        await page.waitForTimeout(2000);
        await (0, test_1.expect)(page.getByTestId("popupContainer")).toBeVisible();
        await page.getByPlaceholder("I'm shopping for").fill("S29055-33");
        await page.waitForTimeout(1000);
        await (0, test_1.expect)(page.getByRole("link", { name: "Spitfire 5" }).first()).toBeVisible();
        await page.getByRole("link", { name: "Spitfire 5" }).first().click();
        await page.waitForLoadState();
        await (0, test_1.expect)(page.url()).toContain(`${frontUrl_1.default}/products/`);
        await (0, test_1.expect)(page.getByTestId('principalImg')).toBeVisible();
        const img = await page.getByTestId('principalImg').getAttribute('src');
        await (0, test_1.expect)(page.getByTestId('secondaryImgs')).toBeVisible();
        await (0, test_1.expect)(page.getByTestId('secondImg').first()).toBeVisible();
        const secondImg = await page.getByTestId('secondImg').first().getAttribute('src');
        await (0, test_1.expect)(secondImg === img).toBe(false);
        await page.getByTestId('secondImg').first().click();
        (0, test_1.expect)(await page.getByTestId('principalImg').getAttribute('src')).toBe(secondImg);
    });
}
exports.default = createTest;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("is showing all available colors", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all");
        await page.waitForLoadState();
        await page.getByRole("button", { name: "Product Type" }).click();
        await page.getByRole("button", { name: "Footwear" }).click();
        await (0, test_1.expect)(page.getByRole("button", { name: "Brand" })).toBeVisible();
        await page.getByRole("button", { name: "Brand" }).click();
        await page.getByRole('button', { name: 'On', exact: true }).click();
        await (0, test_1.expect)(page.getByRole("button", { name: "Colors" })).toBeVisible();
        await page.getByRole("button", { name: "Colors" }).click();
        await (0, test_1.expect)(page.getByTestId("others-colors")).toBeVisible();
    });
}
exports.default = createTest;

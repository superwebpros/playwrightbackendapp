"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("loaded", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all", { waitUntil: "networkidle" });
        await (0, test_1.expect)(page.getByTestId("container-filters")).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Gender" })).toBeVisible();
        await page.close();
    });
    (0, test_1.test)("initial filters configuration", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all", { waitUntil: "networkidle" });
        await (0, test_1.expect)(page.getByRole("button", { name: "Gender" })).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Product Type" })).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Brand" })).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Price Range" })).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Categories" })).not.toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Size" })).not.toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Width" })).not.toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Colors" })).not.toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Clear refinements" })).not.toBeVisible();
        await page.close();
    });
    (0, test_1.test)("more filters available when selecting a product type", async ({ page, }) => {
        await page.goto(frontUrl_1.default + "/collections/all", { waitUntil: "networkidle" });
        await (0, test_1.expect)(page.getByRole("button", { name: "Gender" })).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Product Type" })).toBeVisible();
        await page.getByRole("button", { name: "Product Type" }).click();
        await page.waitForLoadState("networkidle");
        await page.getByRole("button", { name: "Footwear" }).click();
        await page.waitForLoadState("networkidle");
        await (0, test_1.expect)(page.getByRole("button", { name: "Brand" })).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Price Range" })).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Categories" })).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Size" })).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Width" })).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Colors" })).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Clear refinements" })).toBeVisible();
        await page.close();
    });
}
exports.default = createTest;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("subcategories availables", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all", { waitUntil: "networkidle" });
        await page.getByRole("button", { name: "Product Type" }).click();
        await page.getByRole("button", { name: "footwear" }).click();
        await (0, test_1.expect)(page.getByRole("button", { name: "Categories" })).toBeVisible();
        await page.getByRole("button", { name: "Categories" }).click();
        await (0, test_1.expect)(page.getByRole("button", { name: "Running" })).toBeVisible();
        await page.getByRole("button", { name: "Running" }).click();
        const data = await page.getByTestId("categoryItem").first().allInnerTexts();
        await (0, test_1.expect)(data[0]).toContain("Men");
        await page.getByRole("button", { name: "Gender" }).click();
        await page.getByRole("button", { name: "Women", exact: true }).click();
        const updatedData = await page
            .getByTestId("categoryItem")
            .first()
            .allInnerTexts();
        await (0, test_1.expect)(updatedData[0]).not.toContain("Men");
        await page.getByRole("link", { name: "Shop", exact: true }).hover();
        await page.getByRole("link", { name: "Footwear" }).nth(1).click();
        await page.waitForLoadState("networkidle");
        await page.getByRole("button", { name: "Categories" }).click();
        await page.getByRole("button", { name: "Running" }).click();
        const data2 = await page
            .getByTestId("categoryItem")
            .first()
            .allInnerTexts();
        await (0, test_1.expect)(data2[0]).not.toContain("Men");
        await page.close();
    });
}
exports.default = createTest;

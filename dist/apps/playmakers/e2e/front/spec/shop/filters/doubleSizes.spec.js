"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("is showing size for men and women at the same tag", async ({ page, }) => {
        await page.goto(frontUrl_1.default + "/collections/all", { waitUntil: "networkidle" });
        // first i ckeck if the sizes are showing for both genders in unisex products
        await page.getByRole("button", { name: "Gender" }).click();
        await page.getByRole("button", { name: "Unisex" }).click();
        await page.getByRole("button", { name: "Product Type" }).click();
        await page.getByRole("button", { name: "Footwear" }).click();
        await page.getByRole("button", { name: "Size" }).click();
        let sizes = await page.getByTestId("sizeValue").allInnerTexts();
        for (let size of sizes) {
            (0, test_1.expect)(size).toContain("M");
            (0, test_1.expect)(size).toContain("W");
        }
        // i deselect the unisex tag and check if the sizes are showing independently
        await page.getByRole("button", { name: "Unisex" }).click();
        sizes = await page.getByTestId("sizeValue").allInnerTexts();
        for (let size of sizes) {
            (0, test_1.expect)(size).not.toContain("M");
            (0, test_1.expect)(size).not.toContain("W");
        }
    });
}
exports.default = createTest;

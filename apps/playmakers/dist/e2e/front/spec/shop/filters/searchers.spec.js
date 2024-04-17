"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("works", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/men/footwear");
        await page.waitForLoadState();
        // Category search
        await page.getByRole("button", { name: "Categories" }).click();
        await page
            .getByTestId("container-filters")
            .getByPlaceholder("Search for a category...")
            .fill("Neutral");
        let data = await page.getByTestId("container-filters").allInnerTexts();
        let splitData = data[0].split("\n").map((text) => text.trim());
        // console.log(splitData);
        (0, test_1.expect)(splitData.length).toBe(6);
        // Brand search
        await page.getByRole("button", { name: "Brand" }).click();
        await page
            .getByTestId("container-filters")
            .getByTestId("brands-search-input")
            .fill("Altra");
        data = await page
            .getByTestId("container-filters")
            .getByTestId("brands-search-input")
            .allInnerTexts();
        splitData = data[0].split("\n").map((text) => text.trim());
        // console.log(splitData);
        (0, test_1.expect)(splitData.length).toBe(6);
    });
}
exports.default = createTest;

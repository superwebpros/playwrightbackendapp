"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("works", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/men/footwear", {
            waitUntil: "networkidle",
        });
        // Category search
        await page.getByRole("button", { name: "Categories" }).click();
        await page.waitForLoadState("networkidle");
        let searchText = "neutral";
        await page
            .getByTestId("container-filters")
            .getByPlaceholder("Search for a category...")
            .type(searchText, { delay: 100 });
        let data = await page.getByTestId("categorySearchResults").allInnerTexts();
        let splitData = data[1].split("\n").map((text) => text.trim());
        let splitDataCount = splitData.filter((text) => !text.toLowerCase().includes(searchText.toLowerCase()));
        (0, test_1.expect)(splitDataCount.length).toBe(0);
        // Brand search
        await page.getByRole("button", { name: "Brand" }).click();
        await page.waitForLoadState("networkidle");
        searchText = "altra";
        await page
            .getByTestId("container-filters")
            .getByPlaceholder("Search your favorite brand...")
            .type(searchText, { delay: 100 });
        data = await page.getByTestId("brandSearchResults").allInnerTexts();
        splitData = data[1].split("\n").map((text) => text.trim());
        splitDataCount = splitData.filter((text) => !text.toLowerCase().includes(searchText.toLowerCase()));
        (0, test_1.expect)(splitDataCount.length).toBe(0);
        await page.close();
    });
}
exports.default = createTest;

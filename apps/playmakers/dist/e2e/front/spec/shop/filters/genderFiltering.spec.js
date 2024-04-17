"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("women gender was filtered", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all");
        await page.waitForLoadState();
        await (0, test_1.expect)(page.getByTestId("container-filters")).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Gender" })).toBeVisible();
        // Test men hit filtering
        await page.getByRole("button", { name: "Gender" }).click();
        await page.getByRole("button", { name: "Men", exact: true }).click();
        await page.waitForTimeout(2000);
        let links = await page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .getByRole("link")
            .allTextContents();
        let linksNames = links.filter((link) => link.includes("Women's"));
        await (0, test_1.expect)(linksNames.length).toBe(0);
        // Test women hit filtering
        await page.getByRole("button", { name: "Men", exact: true }).click();
        await page.waitForTimeout(1000);
        await page.getByRole("button", { name: "Women", exact: true }).click();
        await page.waitForTimeout(2000);
        await page.waitForSelector(".ais-InfiniteHits-list");
        links = await page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .getByRole("link")
            .allTextContents();
        linksNames = links.filter((link) => link.includes("Men's"));
        console.log("linksNames", linksNames);
        await (0, test_1.expect)(linksNames.length).toBe(0);
    });
}
exports.default = createTest;

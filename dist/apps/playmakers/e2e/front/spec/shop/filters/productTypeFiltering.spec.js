"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("footware and apparel filtering", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all");
        await page.waitForLoadState();
        await (0, test_1.expect)(page.getByTestId("container-filters")).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Product Type" })).toBeVisible();
        await page.getByRole("button", { name: "Product Type" }).click();
        await page.getByRole("button", { name: "Footwear" }).click();
        await page.waitForTimeout(3000);
        await page.waitForSelector('.ais-InfiniteHits-list');
        await page.waitForLoadState('networkidle');
        let links = await page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .getByRole("link")
            .allInnerTexts();
        let linksNames = links.filter((link) => link !== "");
        await page.getByRole("link", { name: `${linksNames[0]}` }).first().click();
        await page.waitForLoadState();
        await (0, test_1.expect)(page).toHaveURL(/\/products\//);
        await (0, test_1.expect)(page.getByRole("link", { name: "〉Footwear" })).toBeVisible();
        await page.goBack();
        await page.waitForLoadState();
        //test apparel
        await page.getByTestId('container-filters').getByRole("button", { name: "Product Type" }).click();
        await page.getByRole("button", { name: "Footwear" }).click();
        await page.waitForTimeout(3000);
        await page.getByRole("button", { name: "Apparel" }).click();
        await page.waitForTimeout(3000);
        await page.waitForSelector('.ais-InfiniteHits-list');
        links = await page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .getByRole("link")
            .allInnerTexts();
        linksNames = links.filter((link) => link !== "");
        await page.getByRole("link", { name: `${linksNames[0]}` }).first().click();
        await page.waitForLoadState('networkidle');
        await (0, test_1.expect)(page).toHaveURL(/\/products\//);
        await (0, test_1.expect)(page.getByRole("link", { name: "〉Apparel" })).toBeVisible();
    });
}
exports.default = createTest;

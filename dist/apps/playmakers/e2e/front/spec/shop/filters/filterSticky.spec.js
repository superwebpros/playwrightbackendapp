"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("selected filter, refresh and is visible", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all");
        await page.waitForLoadState();
        await page.getByRole("button", { name: "Product Type" }).click();
        await page.getByRole("button", { name: "Footwear" }).click();
        await page.reload();
        await page.waitForLoadState();
        await (0, test_1.expect)(page.getByTestId("container-filters").getByText("Footwear ✗")).toBeVisible();
    });
    (0, test_1.test)("selected filter, go to product, go back and is visible", async ({ page, }) => {
        await page.goto(frontUrl_1.default + "/collections/all");
        await page.waitForLoadState();
        await page.getByRole("button", { name: "Product Type" }).click();
        await page.getByRole("button", { name: "Footwear" }).click();
        await page.waitForTimeout(2000);
        await page.waitForSelector('.ais-InfiniteHits-list');
        let links = await page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .getByRole("link")
            .allInnerTexts();
        let linksNames = links.filter((link) => link !== "");
        await page.getByRole("link", { name: `${linksNames[0]}` }).first().click();
        await page.waitForLoadState();
        await page.goBack();
        await page.waitForLoadState();
        await (0, test_1.expect)(page.getByTestId("container-filters").getByText("Footwear ✗")).toBeVisible();
    });
    (0, test_1.test)("filters are not sticking across product pages", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all");
        await page.waitForLoadState();
        await page.getByRole("button", { name: "Product Type" }).click();
        await page.getByRole("button", { name: "Footwear" }).click();
        await (0, test_1.expect)(page.getByTestId('container-filters').getByText('Footwear ✗')).toBeVisible();
        await page.getByRole('button', { name: 'Brand' }).click();
        await (0, test_1.expect)(page.getByRole('button', { name: 'ASICS' })).toBeVisible();
        await page.getByRole('button', { name: 'ASICS' }).click();
        await page.waitForTimeout(5000);
        await page.getByRole('link', { name: 'Shop' }).hover();
        await (0, test_1.expect)(page.getByRole('link', { name: 'Apparel' }).nth(1)).toBeVisible();
        await page.getByRole('link', { name: 'Apparel' }).nth(1).click();
        await page.waitForLoadState();
        await page.waitForTimeout(5000);
        await (0, test_1.expect)(page.getByTestId('clearRefinements')).not.toBeVisible();
    });
}
exports.default = createTest;

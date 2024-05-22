"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("footware and apparel filtering", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all", { waitUntil: "commit" });
        await (0, test_1.expect)(page.getByTestId("container-filters")).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Product Type" })).toBeVisible();
        await page.getByRole("button", { name: "Product Type" }).click();
        await page.waitForLoadState("networkidle");
        await page.getByRole("button", { name: "Footwear" }).click();
        await page.waitForLoadState("networkidle");
        await page.waitForURL(frontUrl_1.default +
            "/collections/all?shopify_products%5BrefinementList%5D%5Bcollections%5D%5B0%5D=footwear");
        await page.getByTestId("hit").first().click();
        await page.waitForLoadState("networkidle");
        await (0, test_1.expect)(page).toHaveURL(/\/products\//);
        await (0, test_1.expect)(page.getByRole("link", { name: "〉Footwear" })).toBeVisible();
        await page.goBack();
        await page.waitForLoadState("networkidle");
        //test apparel
        await page
            .getByTestId("container-filters")
            .getByRole("button", { name: "Product Type" })
            .click();
        await page.waitForLoadState("networkidle");
        await page.getByRole("button", { name: "Footwear" }).click();
        await page.waitForLoadState("networkidle");
        await page.getByRole("button", { name: "Apparel" }).click();
        await page.waitForLoadState("networkidle");
        await page.waitForURL(frontUrl_1.default +
            "/collections/all?shopify_products%5BrefinementList%5D%5Bcollections%5D%5B0%5D=apparel");
        await page.waitForLoadState("networkidle");
        await page.waitForSelector(".ais-InfiniteHits-list");
        await page.getByTestId("hit").first().click();
        await page.waitForLoadState("networkidle");
        await (0, test_1.expect)(page).toHaveURL(/\/products\//);
        await (0, test_1.expect)(page.getByRole("link", { name: "〉Apparel" })).toBeVisible();
    });
}
exports.default = createTest;

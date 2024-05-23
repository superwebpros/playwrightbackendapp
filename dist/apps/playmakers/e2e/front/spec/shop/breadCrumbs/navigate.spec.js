"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("navigate", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/women/apparel", {
            waitUntil: "networkidle",
        });
        await page.getByRole("link", { name: "〉Women" }).click();
        await page.waitForLoadState("networkidle");
        await (0, test_1.expect)(page.url()).toBe(frontUrl_1.default + "/collections/women");
        await page.waitForSelector("data-testid=shopBreadcrumbs");
        await page.getByRole("link", { name: "〉Collections" }).click();
        await page.waitForLoadState("networkidle");
        await (0, test_1.expect)(page.url()).toBe(frontUrl_1.default + "/collections/all");
        await page.close();
    });
    (0, test_1.test)("go to product and navigate from breadcrumbs ", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all", { waitUntil: "networkidle" });
        await page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .locator(".ais-InfiniteHits-item")
            .first()
            .click();
        await page.waitForLoadState("networkidle");
        await page.waitForSelector("form");
        await (0, test_1.expect)(page.locator("form").filter({ hasText: "Add to Cart" }).locator("svg")).toBeVisible();
        await (0, test_1.expect)(page.getByRole("link", { name: "〉Collections" })).toBeVisible();
        await page.getByRole("link", { name: "〉Collections" }).click();
        await page.waitForLoadState("networkidle");
        await (0, test_1.expect)(page.url()).toBe(frontUrl_1.default + "/collections/all");
        await page.close();
    });
}
exports.default = createTest;

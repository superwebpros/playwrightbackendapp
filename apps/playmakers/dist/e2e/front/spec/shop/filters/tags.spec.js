"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("tags work", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all", { waitUntil: "commit" });
        await page.getByRole("button", { name: "Product Type" }).click();
        await page.waitForLoadState("networkidle");
        await page.getByRole("button", { name: "Footwear" }).click();
        await page.waitForLoadState("networkidle");
        await page.waitForURL(frontUrl_1.default +
            "/collections/all?shopify_products%5BrefinementList%5D%5Bcollections%5D%5B0%5D=footwear");
        const Footwear = await page
            .getByTestId("container-filters")
            .getByText("Footwear ✗");
        await (0, test_1.expect)(Footwear).toBeVisible();
        await Footwear.click();
        await (0, test_1.expect)(Footwear).not.toBeVisible();
    });
}
exports.default = createTest;

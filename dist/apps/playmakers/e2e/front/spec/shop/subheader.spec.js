"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("links works", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all", { waitUntil: "networkidle" });
        const link = await page
            .getByTestId("subheader")
            .getByRole("link")
            .first()
            .getAttribute("href");
        const link2 = await page
            .getByTestId("subheader")
            .getByRole("link")
            .nth(1)
            .getAttribute("href");
        const link3 = await page
            .getByTestId("subheader")
            .getByRole("link")
            .nth(2)
            .getAttribute("href");
        await page.getByTestId("subheader").getByRole("link").first().click();
        await page.waitForLoadState("networkidle");
        await (0, test_1.expect)(page.url()).toContain(link.split(".com/")[1]);
        await page.goBack();
        await page.waitForLoadState("networkidle");
        await page.getByTestId("subheader").getByRole("link").nth(1).click();
        await page.waitForLoadState("networkidle");
        await (0, test_1.expect)(page.url()).toContain(link2.split(".com/")[1]);
        await page.goBack();
        await page.waitForLoadState("networkidle");
        await page.getByTestId("subheader").getByRole("link").nth(2).click();
        await page.waitForLoadState("networkidle");
        await (0, test_1.expect)(page.url()).toContain(link3.split(".com/")[1]);
        await page.close();
    });
}
exports.default = createTest;

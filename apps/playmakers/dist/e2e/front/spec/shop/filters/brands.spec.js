"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("filtering only with selected brand", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all", { waitUntil: "networkidle" });
        await page.getByRole("button", { name: "Brand" }).click();
        await page.waitForLoadState("networkidle");
        await page.getByRole("button", { name: "ASICS" }).click();
        await page.waitForTimeout(2000);
        let links = await page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .getByRole("link")
            .allInnerTexts();
        // console.log(links);
        let linksNames = links.filter((link) => link !== "" && link.includes("ASICS"));
        const linksCount = links.filter((link) => link !== "" && !link.includes("+"));
        await (0, test_1.expect)(linksCount.length).toBe(linksNames.length);
        await page.close();
    });
}
exports.default = createTest;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
function createTest() {
    (0, test_1.test)("home", async ({ page }) => {
        await page.goto("https://www.superwebpros.com/");
        await page.getByRole("link", { name: "Bonuses Included" }).click();
        await (0, test_1.expect)(page.getByText("Pro-fessional WP Theme Bundle")).toBeVisible();
    });
}
exports.default = createTest;
;

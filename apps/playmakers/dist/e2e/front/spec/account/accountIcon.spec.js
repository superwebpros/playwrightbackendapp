"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("color change on login and logout", async ({ page }) => {
        await page.goto(frontUrl_1.default, { waitUntil: "networkidle" });
        await (0, test_1.expect)(page.getByTestId("nav")).toBeVisible();
        await page.getByTestId("accountButtonInactive").click();
        await page.waitForLoadState("networkidle");
        await page.getByPlaceholder("Email address").fill("leandrosavat@gmail.com");
        await page.getByPlaceholder("Password").fill("Lea12345");
        await page.getByRole("button", { name: "Sign in" }).click();
        await page.waitForLoadState("networkidle");
        await page.waitForSelector("button:has-text('Sign out')");
        await (0, test_1.expect)(page.getByRole("button", { name: "Sign out" })).toBeVisible();
        await (0, test_1.expect)(page.getByTestId("accountButtonActive")).toBeVisible();
        await page.waitForLoadState("networkidle");
        await page.getByRole("button", { name: "Sign out" }).click();
        await page.waitForLoadState("networkidle");
        await (0, test_1.expect)(page.getByTestId("accountButtonInactive")).toBeVisible();
        await page.close();
    });
}
exports.default = createTest;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    return (0, test_1.test)("log out and user information is visible", async ({ page }) => {
        await page.goto(frontUrl_1.default, { waitUntil: "commit" });
        await (0, test_1.expect)(page.getByTestId("nav")).toBeVisible();
        await page.getByTestId("accountButtonInactive").click();
        await page.getByPlaceholder("Email address").fill("leandrosavat@gmail.com");
        await page.getByPlaceholder("Password").fill("Lea12345");
        await page.getByRole("button", { name: "Sign in" }).click();
        await page.waitForSelector("button:has-text('Sign out'):enabled");
        await (0, test_1.expect)(page.getByRole("button", { name: "Sign out" })).toBeVisible();
        await (0, test_1.expect)(page.getByRole("link", { name: "Orders" })).toBeVisible();
        await (0, test_1.expect)(page.getByRole("link", { name: "Profile" })).toBeVisible();
        await (0, test_1.expect)(page.getByRole("link", { name: "Addresses" })).toBeVisible();
        await page.getByRole("link", { name: "Profile" }).click();
        await (0, test_1.expect)(page.getByText("Personal information")).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Update" })).toBeVisible();
        await page.getByRole("link", { name: "Addresses" }).click();
        await (0, test_1.expect)(page.getByRole("heading", { name: "Addresses" })).toBeVisible();
        await (0, test_1.expect)(page.getByRole("button", { name: "Sign out" })).toBeVisible();
    });
}
exports.default = createTest;

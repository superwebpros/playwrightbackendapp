"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("can log out", async ({ page }) => {
        await page.goto(frontUrl_1.default);
        await (0, test_1.expect)(page.getByTestId("nav")).toBeVisible();
        await page.getByTestId('accountButtonInactive').click();
        await page.waitForLoadState("domcontentloaded");
        await page.getByPlaceholder('Email address').fill('leandrosavat@gmail.com');
        await page.getByPlaceholder('Password').fill('Lea12345');
        await page.getByRole('button', { name: 'Sign in' }).click();
        await page.waitForTimeout(3000);
        await (0, test_1.expect)(page.getByRole('button', { name: 'Sign out' })).toBeVisible();
        await page.getByRole('button', { name: 'Sign out' }).click();
        await page.waitForTimeout(1500);
        await (0, test_1.expect)(page.getByTestId('accountButtonInactive')).toBeVisible();
    });
}
exports.default = createTest;

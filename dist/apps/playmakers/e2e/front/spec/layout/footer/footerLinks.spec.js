"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("navigate from footer when are on shop", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all");
        await page.waitForLoadState();
        await (0, test_1.expect)(page.getByTestId("flowbite-footer")).toBeVisible();
        await page.getByRole("link", { name: "Who We Are" }).click();
        await page.waitForLoadState();
        await (0, test_1.expect)(page.url()).toBe(frontUrl_1.default + "/about");
    });
}
exports.default = createTest;

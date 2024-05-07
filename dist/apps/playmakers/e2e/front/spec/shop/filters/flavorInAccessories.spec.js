"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("flavor is visible when accessories is selected", async ({ page, }) => {
        await page.goto(frontUrl_1.default + "/collections/all");
        await page.waitForLoadState();
        await page.getByRole("button", { name: "Product Type" }).click();
        await page.getByRole("button", { name: "Accessories" }).click();
        await (0, test_1.expect)(page.getByRole("button", { name: "Flavor" })).toBeVisible();
        await page.getByRole("button", { name: "Accessories" }).click();
        await (0, test_1.expect)(page.getByRole("button", { name: "Flavor" })).not.toBeVisible();
    });
}
exports.default = createTest;

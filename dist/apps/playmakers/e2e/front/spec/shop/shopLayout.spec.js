"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("loads", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all");
        await page.waitForLoadState();
        await (0, test_1.expect)(page.getByTestId("nav")).toBeVisible();
        await (0, test_1.expect)(page.getByTestId("nav-links")).toBeVisible();
        await (0, test_1.expect)(page.getByTestId("shopContainer")).toBeVisible();
        await (0, test_1.expect)(page.getByTestId("shopBreadcrumbs")).toBeVisible();
        await (0, test_1.expect)(page.getByTestId("shopSearchBox")).toBeVisible();
        await (0, test_1.expect)(page.getByTestId("infiniteHits")).toBeVisible();
        await (0, test_1.expect)(page.getByTestId("shopHeader")).toBeVisible();
    });
}
exports.default = createTest;

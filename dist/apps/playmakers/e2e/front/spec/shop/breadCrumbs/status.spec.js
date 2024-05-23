"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("loaded", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all", { waitUntil: "networkidle" });
        await (0, test_1.expect)(page.getByRole("link", { name: "〉Collections" })).toBeVisible();
        await page.goto(frontUrl_1.default + "/collections/women/apparel", {
            waitUntil: "commit",
        });
        await (0, test_1.expect)(page.getByRole("link", { name: "〉Women" })).toBeVisible();
        await page.close();
    });
}
exports.default = createTest;

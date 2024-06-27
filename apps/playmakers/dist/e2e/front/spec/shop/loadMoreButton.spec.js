"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("has wide", async ({ page }) => {
        // test on collections all
        await page.goto(frontUrl_1.default + "/collections/all", {
            waitUntil: "networkidle",
        });
        await (0, test_1.expect)(page.getByRole("button", { name: "Load More" })).toBeVisible();
        // test button in collections men, women y kids
        await page.goto(frontUrl_1.default + "/collections/men", {
            waitUntil: "networkidle",
        });
        await (0, test_1.expect)(page.getByRole("button", { name: "Load More" })).toBeVisible();
        await page.goto(frontUrl_1.default + "/collections/women", {
            waitUntil: "networkidle",
        });
        await (0, test_1.expect)(page.getByRole("button", { name: "Load More" })).toBeVisible();
        await page.goto(frontUrl_1.default + "/collections/kids", {
            waitUntil: "networkidle",
        });
        await (0, test_1.expect)(page.getByRole("button", { name: "Load More" })).toBeVisible();
        await page.close();
    });
}
exports.default = createTest;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
const wides = ["Regular", "Wide", "Extra Wide", "Narrow"];
function createTest() {
    (0, test_1.test)("appears when is necessary", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all", {
            waitUntil: "networkidle",
        });
        await (0, test_1.expect)(page.getByRole("button", { name: "Gender" })).toBeVisible();
        await page.goto(frontUrl_1.default + "/collections/brooks", {
            waitUntil: "networkidle",
        });
        await (0, test_1.expect)(page.getByRole("button", { name: "Gender" })).toBeVisible();
        // not be visible in...
        await page.goto(frontUrl_1.default + "/collections/men", {
            waitUntil: "networkidle",
        });
        await (0, test_1.expect)(page.getByRole("button", { name: "Gender" })).not.toBeVisible();
        await page.goto(frontUrl_1.default + "/collections/women", {
            waitUntil: "networkidle",
        });
        await (0, test_1.expect)(page.getByRole("button", { name: "Gender" })).not.toBeVisible();
        await page.goto(frontUrl_1.default + "/collections/kids", {
            waitUntil: "networkidle",
        });
        await (0, test_1.expect)(page.getByRole("button", { name: "Gender" })).not.toBeVisible();
        await page.close();
    });
}
exports.default = createTest;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
const wides = ["Regular", "Wide", "Extra Wide", "Narrow"];
function createTest() {
    (0, test_1.test)("has wide", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/men/footwear", {
            waitUntil: "networkidle",
        });
        const titles = await page.getByTestId("title").allInnerTexts();
        const WithoutWide = titles.filter((title) => !wides.some((wide) => title.includes(wide)));
        (0, test_1.expect)(WithoutWide).toEqual([]);
        await page.close();
    });
}
exports.default = createTest;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("gender sizes are being separated", async ({ page }) => {
        // Check womens sizes
        await page.goto(frontUrl_1.default + "/collections/women/footwear");
        await page.waitForLoadState();
        await page.getByRole("button", { name: "Size" }).click();
        const womenSizes = await page.getByTestId("sizeValue").allInnerTexts();
        let correct = true;
        womenSizes.map((size) => {
            if (Number(size) > 12 || Number(size) < 5) {
                correct = false;
            }
        });
        await (0, test_1.expect)(correct).toBeTruthy();
        // Check men sizes
        await page.goto(frontUrl_1.default + "/collections/men/footwear");
        await page.waitForLoadState();
        await page.getByRole("button", { name: "Size" }).click();
        const menSizes = await page.getByTestId("sizeValue").allInnerTexts();
        correct = true;
        menSizes.map((size) => {
            if (Number(size) > 17 || Number(size) < 7) {
                correct = false;
            }
        });
        await (0, test_1.expect)(correct).toBeTruthy();
        // Check Kids sizes
        await page.goto(frontUrl_1.default + "/collections/kids/footwear");
        await page.waitForLoadState();
        await page.getByRole("button", { name: "Size" }).click();
        const kidSizes = await page.getByTestId("sizeValue").allInnerTexts();
        correct = true;
        kidSizes.map((size) => {
            if (Number(size) > 5 || Number(size) < 1) {
                correct = false;
            }
        });
        await (0, test_1.expect)(correct).toBeTruthy();
    });
}
exports.default = createTest;

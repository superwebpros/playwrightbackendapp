"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("hover happens", async ({ page }) => {
        await page.goto(`${frontUrl_1.default}/collections/all`);
        const hits = await page.getByTestId("hit").allTextContents();
        // Find the first element with "+" in its text content
        const firstHitWithOptions = hits.find((hit) => hit.includes("+"));
        // Ensure that the element to be clicked is properly awaited
        await page
            .getByTestId("hit")
            .filter({ hasText: firstHitWithOptions })
            .click();
        // Fetch the bounding box before hover
        const secondImgElement = await page.getByTestId("secondImg").first();
        const sizeBeforeHover = await secondImgElement.boundingBox();
        // Perform hover and then fetch the bounding box after hover
        await secondImgElement.hover({ force: true, noWaitAfter: false });
        await page.waitForTimeout(1000);
        const sizeAfterHover = await secondImgElement.boundingBox();
        (0, test_1.expect)(sizeAfterHover?.width > sizeBeforeHover?.width).toBeTruthy();
    });
}
exports.default = createTest;

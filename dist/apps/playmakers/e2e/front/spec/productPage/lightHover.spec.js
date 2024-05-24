"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("hover happens", async ({ page }) => {
        await page.goto(`${frontUrl_1.default}/products/cielo-x-2-md?Color=Ceramic+%2F+Evening+Primrose+%28CEPR%29&Size=6&Width=D`);
        await page.waitForLoadState('networkidle');
        const secondImgElement = await page.getByTestId("secondImg").first();
        const sizeBeforeHover = await secondImgElement.boundingBox();
        // Perform hover and then fetch the bounding box after hover
        await secondImgElement.hover({ force: true, noWaitAfter: false });
        await page.waitForTimeout(1000);
        await page.waitForLoadState("networkidle");
        const sizeAfterHover = await secondImgElement.boundingBox();
        // console.log(sizeBeforeHover, sizeAfterHover)
        (0, test_1.expect)(sizeAfterHover?.width > sizeBeforeHover?.width).toBeTruthy();
        await page.close();
    });
}
exports.default = createTest;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("Hover make icons bigger", async ({ page }) => {
        await page.goto(frontUrl_1.default);
        await page.waitForLoadState();
        let favoriteIcon = await page.getByTestId("favoriteIcon");
        await (0, test_1.expect)(favoriteIcon).toBeVisible();
        let boundingBox = await favoriteIcon.boundingBox();
        let iconWidth = boundingBox ? boundingBox.width : null;
        await favoriteIcon.hover();
        let newBoundingBox = await favoriteIcon.boundingBox();
        let newIconWidth = newBoundingBox ? newBoundingBox.width : null;
        if (iconWidth && newIconWidth) {
            (0, test_1.expect)(newIconWidth).toBeGreaterThan(iconWidth);
        }
        else {
            throw new Error("Icon width is null");
        }
        let acountIcon = await page.getByTestId("accountButtonInactive");
        await (0, test_1.expect)(acountIcon).toBeVisible();
        let boundingBox2 = await acountIcon.boundingBox();
        let iconWidth2 = boundingBox2 ? boundingBox2.width : null;
        await acountIcon.hover({ force: true, noWaitAfter: false });
        await page.waitForTimeout(1000);
        let newBoundingBox2 = await acountIcon.boundingBox();
        let newIconWidth2 = newBoundingBox2 ? newBoundingBox2.width : null;
        console.log(iconWidth2, newIconWidth2, newBoundingBox2, acountIcon);
        // await page.waitForTimeout(5000);
        if (iconWidth2 && newIconWidth2) {
            (0, test_1.expect)(newIconWidth2).toBeGreaterThan(iconWidth2);
        }
        else {
            throw new Error("Icon width is null");
        }
    });
}
exports.default = createTest;

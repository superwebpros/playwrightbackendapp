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
        boundingBox = await acountIcon.boundingBox();
        iconWidth = boundingBox ? boundingBox.width : null;
        await acountIcon.hover();
        newBoundingBox = await acountIcon.boundingBox();
        newIconWidth = newBoundingBox ? newBoundingBox.width : null;
        if (iconWidth && newIconWidth) {
            (0, test_1.expect)(newIconWidth).toBeGreaterThan(iconWidth);
        }
        else {
            throw new Error("Icon width is null");
        }
    });
}
exports.default = createTest;

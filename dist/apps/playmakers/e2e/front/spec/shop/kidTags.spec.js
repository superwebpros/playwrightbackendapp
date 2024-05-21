"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("tags only with kids", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all", { waitUntil: "commit" });
        await page.getByRole("button", { name: "Gender" }).click();
        await page.getByRole("button", { name: "Big Kids", exact: true }).click();
        await page.waitForLoadState("networkidle");
        const hits = await page.getByTestId("hit").allTextContents();
        // todos los hits deben incluir la palabra kids, algunos hits pueden contener varias tags
        for (const hit of hits) {
            // evito el texto de las opciones de colores
            if (hit !== "" && hit.length > 5)
                (0, test_1.expect)(hit).toContain("Big Kids");
        }
    });
}
exports.default = createTest;

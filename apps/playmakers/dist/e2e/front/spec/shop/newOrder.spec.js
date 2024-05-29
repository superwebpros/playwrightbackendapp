"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("sort by newest to older correctly", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all", { waitUntil: "networkidle" });
        // Busca los textos de las opciones dentro de shopContainer
        const sorterData = await page
            .getByTestId("shopContainer")
            .locator(".ais-SortBy-option")
            .allInnerTexts();
        // Busca el texto de la opción seleccionada
        const selectedElement = await page
            .getByTestId("shopContainer")
            .locator(".ais-SortBy-option[selected]").first()
            .innerText();
        console.log(`Selected element: ${selectedElement}`);
        await (0, test_1.expect)(selectedElement).toContain("Newest to Oldest");
        await page.close();
    });
}
exports.default = createTest;

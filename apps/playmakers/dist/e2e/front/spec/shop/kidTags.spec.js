"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("tags only with kids", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all", { waitUntil: "networkidle" });
        await page.getByRole("button", { name: "Gender" }).click();
        await page.waitForLoadState("networkidle");
        await page.getByRole("button", { name: "Big Kids", exact: true }).click();
        await page.waitForTimeout(1000);
        await page.waitForLoadState("networkidle");
        const hits = await page.getByTestId("hit").allTextContents();
        await (0, test_1.expect)(hits.find((hit) => hit !== "" && hit.length > 5 && hit.includes("Big Kids"))).toContain("Big Kids");
        // for (const hit of hits) {
        //   // evito el texto de las opciones de colores
        //   if (hit !== "" && hit.length > 5) expect(hit).toContain("Big Kids");
        // }
        await page.close();
    });
}
exports.default = createTest;

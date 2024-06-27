"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("cup size available and filtering", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all", { waitUntil: "networkidle" });
        await (0, test_1.expect)(page.getByTestId("shopSearchBox").getByRole("searchbox")).toBeVisible();
        await page.getByTestId("shopSearchBox").click();
        await page.waitForLoadState("networkidle");
        await page.getByTestId("shopSearchBox").type(`bra `);
        await page.waitForLoadState("networkidle");
        await (0, test_1.expect)(page.getByRole("button", { name: "Cup Size" })).toBeVisible();
        await page.getByRole("button", { name: "Cup Size" }).click();
        await page.waitForLoadState("networkidle");
        await (0, test_1.expect)(page.getByTestId("container-filters").getByText("bra ✗")).toBeVisible();
        await page.close();
    });
}
exports.default = createTest;

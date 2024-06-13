"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
let currentURL; // Declare currentURL as a global variable
function createTest() {
    (0, test_1.test)("load product page", async ({ page }) => {
        await page.goto(frontUrl_1.default + "/collections/all", { waitUntil: "networkidle" });
        // agregue esto como algo fundamental ya que los test fallan aveces por no esperar a que cargue la pagina
        const links = await page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .getByRole("link")
            .allTextContents();
        await page
            .getByText(`${links.find((item) => item.trim().length > 0)}`, {
            exact: true,
        })
            .click();
        (0, test_1.expect)(page.url()).toContain(frontUrl_1.default + "/products");
        currentURL = page.url();
    });
    (0, test_1.test)(" expect(page.url()).toContain(url + /products", async ({ page }) => {
        // expect(page.url()).toContain(url + "/products");
    });
    // test("add to cart", async ({ page }) => {});
    // test("go to checkout", async ({ page }) => {});
}
exports.default = createTest;

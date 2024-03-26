"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../../../config/frontUrl"));
let currentURL; // Declare currentURL as a global variable
function createTest() {
    (0, test_1.test)("load product page", (_a) => __awaiter(this, [_a], void 0, function* ({ page }) {
        yield page.goto(frontUrl_1.default + "/collections/all");
        yield page.waitForLoadState(); // agregue esto como algo fundamental ya que los test fallan aveces por no esperar a que cargue la pagina
        const links = yield page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .getByRole("link")
            .allTextContents();
        console.log(links.find((item) => item.trim().length > 0));
        yield page
            .getByText(`${links.find((item) => item.trim().length > 0)}`, {
            exact: true,
        })
            .click();
        (0, test_1.expect)(page.url()).toContain(frontUrl_1.default + "/products");
        currentURL = page.url();
        console.log("test1", currentURL);
    }));
    (0, test_1.test)(" expect(page.url()).toContain(url + /products", (_b) => __awaiter(this, [_b], void 0, function* ({ page }) {
        console.log("test2", currentURL);
        // expect(page.url()).toContain(url + "/products");
    }));
    // test("add to cart", async ({ page }) => {});
    // test("go to checkout", async ({ page }) => {});
}
exports.default = createTest;

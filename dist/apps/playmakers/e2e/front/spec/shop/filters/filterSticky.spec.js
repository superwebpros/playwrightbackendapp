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
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("selected filter, refresh and is visible", ({ page }) => __awaiter(this, void 0, void 0, function* () {
        yield page.goto(frontUrl_1.default + "/collections/all");
        yield page.waitForLoadState();
        yield page.getByRole("button", { name: "Product Type" }).click();
        yield page.getByRole("button", { name: "Footwear" }).click();
        yield page.reload();
        yield page.waitForLoadState();
        yield (0, test_1.expect)(page.getByTestId("container-filters").getByText("Footwear ✗")).toBeVisible();
    }));
    (0, test_1.test)("selected filter, go to product, go back and is visible", ({ page, }) => __awaiter(this, void 0, void 0, function* () {
        yield page.goto(frontUrl_1.default + "/collections/all");
        yield page.waitForLoadState();
        yield page.getByRole("button", { name: "Product Type" }).click();
        yield page.getByRole("button", { name: "Footwear" }).click();
        yield page.waitForTimeout(2000);
        yield page.waitForSelector('.ais-InfiniteHits-list');
        let links = yield page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .getByRole("link")
            .allInnerTexts();
        let linksNames = links.filter((link) => link !== "");
        yield page.getByRole("link", { name: `${linksNames[0]}` }).first().click();
        yield page.waitForLoadState();
        yield page.goBack();
        yield page.waitForLoadState();
        yield (0, test_1.expect)(page.getByTestId("container-filters").getByText("Footwear ✗")).toBeVisible();
    }));
}
exports.default = createTest;

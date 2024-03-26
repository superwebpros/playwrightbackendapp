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
    (0, test_1.test)("women gender was filtered", ({ page }) => __awaiter(this, void 0, void 0, function* () {
        yield page.goto(frontUrl_1.default + "/collections/all");
        yield page.waitForLoadState();
        yield (0, test_1.expect)(page.getByTestId("container-filters")).toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Gender" })).toBeVisible();
        // Test men hit filtering
        yield page.getByRole("button", { name: "Gender" }).click();
        yield page.getByRole("button", { name: "Men", exact: true }).click();
        yield page.waitForTimeout(2000);
        let links = yield page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .getByRole("link")
            .allTextContents();
        let linksNames = links.filter((link) => link.includes("Women's"));
        yield (0, test_1.expect)(linksNames.length).toBe(0);
        // Test women hit filtering
        yield page.getByRole("button", { name: "Men", exact: true }).click();
        yield page.getByRole("button", { name: "Women", exact: true }).click();
        yield page.waitForTimeout(2000);
        yield page.waitForSelector(".ais-InfiniteHits-list");
        links = yield page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .getByRole("link")
            .allTextContents();
        linksNames = links.filter((link) => link.includes("Men's"));
        yield (0, test_1.expect)(linksNames.length).toBe(0);
    }));
}
exports.default = createTest;

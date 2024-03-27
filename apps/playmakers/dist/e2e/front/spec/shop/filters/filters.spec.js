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
    (0, test_1.test)("loaded", (_a) => __awaiter(this, [_a], void 0, function* ({ page }) {
        yield page.goto(frontUrl_1.default + "/collections/all");
        yield page.waitForLoadState();
        yield (0, test_1.expect)(page.getByTestId("container-filters")).toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Gender" })).toBeVisible();
    }));
    (0, test_1.test)("initial filters configuration", (_b) => __awaiter(this, [_b], void 0, function* ({ page }) {
        yield page.goto(frontUrl_1.default + "/collections/all");
        yield page.waitForLoadState();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Gender" })).toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Product Type" })).toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Brand" })).toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Price Range" })).toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Categories" })).not.toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Size" })).not.toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Width" })).not.toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Colors" })).not.toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Clear refinements" })).not.toBeVisible();
    }));
    (0, test_1.test)("more filters available when selecting a product type", (_c) => __awaiter(this, [_c], void 0, function* ({ page }) {
        yield page.goto(frontUrl_1.default + "/collections/all");
        yield page.waitForLoadState();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Gender" })).toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Product Type" })).toBeVisible();
        yield page.getByRole("button", { name: "Product Type" }).click();
        yield page.getByRole("button", { name: "Footwear" }).click();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Brand" })).toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Price Range" })).toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Categories" })).toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Size" })).toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Width" })).toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Colors" })).toBeVisible();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Clear refinements" })).toBeVisible();
    }));
}
exports.default = createTest;

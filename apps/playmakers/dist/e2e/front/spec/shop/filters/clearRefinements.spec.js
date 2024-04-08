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
    (0, test_1.test)("appears when filter is selected", (_a) => __awaiter(this, [_a], void 0, function* ({ page }) {
        yield page.goto(frontUrl_1.default + "/collections/all");
        yield page.getByRole("button", { name: "Gender" }).click();
        yield page.getByRole("button", { name: "Women" }).click();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Clear refinements" })).toBeVisible();
    }));
    (0, test_1.test)("disappears when clic on it", (_b) => __awaiter(this, [_b], void 0, function* ({ page }) {
        yield page.goto(frontUrl_1.default + "/collections/all");
        yield page.waitForLoadState();
        yield page.getByRole("button", { name: "Gender" }).click();
        yield page.getByRole("button", { name: "Women" }).click();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Clear refinements" })).toBeVisible();
        yield page.getByRole("button", { name: "Clear refinements" }).click();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Clear refinements" })).not.toBeVisible();
    }));
    (0, test_1.test)("disappears when filters is deselected", (_c) => __awaiter(this, [_c], void 0, function* ({ page }) {
        yield page.goto(frontUrl_1.default + "/collections/all");
        yield page.waitForLoadState();
        yield page.getByRole("button", { name: "Gender" }).click();
        yield page.getByRole("button", { name: "Women" }).click();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Clear refinements" })).toBeVisible();
        yield page.getByRole("button", { name: "Women" }).click();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Clear refinements" })).not.toBeVisible();
    }));
}
exports.default = createTest;

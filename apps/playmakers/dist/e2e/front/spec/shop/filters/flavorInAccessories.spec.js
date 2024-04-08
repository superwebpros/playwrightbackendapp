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
    (0, test_1.test)("flavor is visible when accessories is selected", (_a) => __awaiter(this, [_a], void 0, function* ({ page, }) {
        yield page.goto(frontUrl_1.default + "/collections/all");
        yield page.waitForLoadState();
        yield page.getByRole("button", { name: "Product Type" }).click();
        yield page.getByRole("button", { name: "Accessories" }).click();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Flavor" })).toBeVisible();
        yield page.getByRole("button", { name: "Accessories" }).click();
        yield (0, test_1.expect)(page.getByRole("button", { name: "Flavor" })).not.toBeVisible();
    }));
}
exports.default = createTest;

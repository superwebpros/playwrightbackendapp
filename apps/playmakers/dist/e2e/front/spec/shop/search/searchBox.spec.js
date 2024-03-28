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
    (0, test_1.test)("searches", (_a) => __awaiter(this, [_a], void 0, function* ({ page }) {
        yield page.goto(frontUrl_1.default + "/collections/all");
        yield page.waitForLoadState();
        const searchBox = yield page.waitForSelector('[data-testid="shopSearchBox"]');
        const isVisible = yield searchBox.isVisible();
        (0, test_1.expect)(isVisible).toBe(true);
        yield searchBox.click();
        const inputField = yield searchBox.$('input[type="search"]');
        if (inputField === null) {
            throw new Error("Input field not found within the search box.");
        }
        yield inputField.fill("SWP test value");
        yield page.waitForURL(`**/collections/all?q=SWP%20test%20value`);
        const currentURL = page.url();
        (0, test_1.expect)(currentURL).toContain("?q=SWP%20test%20value");
    }));
}
exports.default = createTest;

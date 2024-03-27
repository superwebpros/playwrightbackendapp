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
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
function createTest() {
    (0, test_1.test)("home", (_a) => __awaiter(this, [_a], void 0, function* ({ page }) {
        yield page.goto("https://www.superwebpros.com/");
        yield page.getByRole("link", { name: "Bonuses Included" }).click();
        yield (0, test_1.expect)(page.getByText("Pro-fessional WP Theme Bundle")).toBeVisible();
    }));
}
exports.default = createTest;
;

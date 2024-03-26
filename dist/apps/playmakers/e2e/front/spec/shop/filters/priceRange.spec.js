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
const test_1 = require("playwright/test");
const frontUrl_1 = __importDefault(require("../../../../config/frontUrl"));
function createTest() {
    (0, test_1.test)("sale filtering", (_a) => __awaiter(this, [_a], void 0, function* ({ page }) {
        yield page.goto(frontUrl_1.default + "/collections/all");
        yield page.getByRole("button", { name: "Price Range" }).click();
        yield page
            .getByTestId("container-filters")
            .getByTestId("saleFilter")
            .click();
        yield page.waitForTimeout(2000);
        let links = yield page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .getByRole("link")
            .allInnerTexts();
        let linksNames = links.filter((link) => link !== "" && !link.includes("+"));
        let saleTagsCount = yield page.getByTestId("saleTag").count();
        yield (0, test_1.expect)(linksNames.length).toBe(saleTagsCount);
        // take the filter and test if the product are not filtered
        yield page
            .getByTestId("container-filters")
            .getByTestId("saleFilter")
            .click();
        yield page.waitForTimeout(2000);
        links = yield page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .getByRole("link")
            .allInnerTexts();
        linksNames = links.filter((link) => link !== "" && !link.includes("+"));
        saleTagsCount = yield page.getByTestId("saleTag").count();
        yield (0, test_1.expect)(linksNames.length).not.toBe(saleTagsCount);
    }));
    (0, test_1.test)("regular filtering", (_b) => __awaiter(this, [_b], void 0, function* ({ page }) {
        yield page.goto(frontUrl_1.default + "/collections/all");
        yield page.waitForLoadState();
        yield page.getByRole("button", { name: "Price Range" }).click();
        yield page
            .getByTestId("container-filters")
            .getByTestId("regularFilter")
            .click();
        yield page.waitForTimeout(2000);
        let links = yield page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .getByRole("link")
            .allInnerTexts();
        let linksNames = links.filter((link) => link !== "" && !link.includes("+"));
        let saleTagsCount = yield page.getByTestId("saleTag").count();
        yield (0, test_1.expect)(saleTagsCount).toBe(0);
        // take the filter and test if the product are not filtered
        yield page
            .getByTestId("container-filters")
            .getByTestId("regularFilter")
            .click();
        yield page.waitForTimeout(2000);
        links = yield page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .getByRole("link")
            .allInnerTexts();
        linksNames = links.filter((link) => link !== "" && !link.includes("+"));
        saleTagsCount = yield page.getByTestId("saleTag").count();
        yield (0, test_1.expect)(saleTagsCount).not.toBe(0);
    }));
    (0, test_1.test)("price range filtering", (_c) => __awaiter(this, [_c], void 0, function* ({ page }) {
        yield page.goto(frontUrl_1.default + "/collections/all");
        yield page.waitForLoadState();
        yield page.getByRole("button", { name: "Price Range" }).click();
        yield page
            .getByTestId("container-filters")
            .getByPlaceholder("900")
            .fill("20");
        yield page.getByRole("button", { name: "Go" }).click();
        yield page.waitForTimeout(2000);
        let links = yield page
            .getByTestId("infiniteHits")
            .locator(".ais-InfiniteHits")
            .locator(".ais-InfiniteHits-list")
            .getByRole("link")
            .allInnerTexts();
        let linksNames = links.filter((link) => link !== "" && !link.includes("+"));
        const checkLastNumberGreaterThan = (array) => {
            let result = false;
            const regex = /\d+\.\d+|\d+/g; // Expresión regular para encontrar números decimales o enteros
            array.forEach((str) => {
                const numbers = str.match(regex); // Busca todos los números en la cadena
                const lastNumber = parseFloat(numbers[numbers.length - 1]);
                const before = parseFloat(numbers[numbers.length - 2]);
                const lowest = before < lastNumber && before !== "NaN" ? before : lastNumber;
                if (lowest > 20) {
                    result = true;
                }
            });
            return result;
        };
        const biggerThan = checkLastNumberGreaterThan(linksNames);
        yield (0, test_1.expect)(biggerThan).toBe(false);
    }));
}
exports.default = createTest;

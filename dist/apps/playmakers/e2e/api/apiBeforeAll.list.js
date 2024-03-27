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
const strapiUrl_1 = __importDefault(require("../config/strapiUrl"));
const playwright_1 = require("playwright");
const spec_1 = require("./spec");
test_1.test.beforeAll("strapiStatus", () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield playwright_1.chromium.launch();
    const context = yield browser.newContext();
    const page = yield context.newPage();
    const response = yield page.request.get(strapiUrl_1.default);
    yield (0, test_1.expect)(response).toBeOK();
    yield page.goto(strapiUrl_1.default);
    yield (0, test_1.expect)(page.getByText("The server is running")).toBeVisible();
}));
test_1.test.describe("strapi", () => {
    test_1.test.describe("blogs", spec_1.blogsQueries);
    test_1.test.describe("brands", spec_1.brandsQueries);
    test_1.test.describe("events", spec_1.eventsQueries);
    test_1.test.describe("homes", spec_1.homeQueries);
    test_1.test.describe("queries", spec_1.layoutsQueries);
    test_1.test.describe("pages", spec_1.pagesQueries);
    test_1.test.describe("posts", spec_1.postsQueries);
    test_1.test.describe("race results", spec_1.raceResultsQueries);
    test_1.test.describe("resources", spec_1.resourcesQueries);
    test_1.test.describe("shop", spec_1.shopQueries);
    test_1.test.describe("users", spec_1.usersQueries);
});

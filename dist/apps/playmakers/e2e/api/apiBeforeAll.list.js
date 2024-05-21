"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const strapiUrl_1 = __importDefault(require("../config/strapiUrl"));
const playwright_1 = require("playwright");
const spec_1 = require("./spec");
test_1.test.beforeAll("strapiStatus", async () => {
    const browser = await playwright_1.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const response = await page.request.get(strapiUrl_1.default);
    await (0, test_1.expect)(response).toBeOK();
    await page.goto(strapiUrl_1.default, { waitUntil: "commit" });
    await (0, test_1.expect)(page.getByText("The server is running")).toBeVisible();
});
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

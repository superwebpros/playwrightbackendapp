"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const frontUrl_1 = __importDefault(require("../config/frontUrl"));
const t = __importStar(require("./spec"));
function createTest() {
    test_1.test.beforeAll("homeRequest", async ({ browser }) => {
        const page = await browser.newPage();
        const response = await page.request.get(frontUrl_1.default);
        await (0, test_1.expect)(response).toBeOK();
        await page.close();
    });
    // Basics
    test_1.test.describe("Basics", () => {
        test_1.test.describe("layout", t.layout);
        test_1.test.describe("home", t.home);
        test_1.test.describe("nav", () => {
            test_1.test.describe("nav status", t.navStatus);
            test_1.test.describe("has logo", t.hasLogo);
            test_1.test.describe("links work", t.linksWork);
        });
    });
    // Shop
    test_1.test.describe("shop", () => {
        test_1.test.describe("layout", t.shopLayout);
        test_1.test.describe("searchBox", t.shopSearchBox);
        // test.describe("ecommerceFlow", ecommerceFlow);
        test_1.test.describe("filters", () => {
            test_1.test.describe("filters", t.filters);
            test_1.test.describe("gender filtering", t.genderFiltering);
            test_1.test.describe("productType filtering", t.productTypeFiltering);
            test_1.test.describe("priceRange", t.priceRange);
            test_1.test.describe("brands", t.brands);
            test_1.test.describe("filter sticky", t.filterSticky);
            test_1.test.describe("flavor", t.flavorInAccessories);
        });
        test_1.test.describe("refinementsComponent", () => {
            test_1.test.describe("clearRefinements", t.clearRefinements);
            test_1.test.describe("tags", t.tags);
        });
        test_1.test.describe("breadCrumbs", () => {
            test_1.test.describe("status", t.status);
            test_1.test.describe("navigate", t.navigate);
            test_1.test.describe("urlCorrelation", t.urlCorrelation);
        });
    });
    // Product Page
    test_1.test.describe("productPage", () => {
        test_1.test.describe("layout", t.zoomOnImage);
    });
}
exports.default = createTest;
createTest();

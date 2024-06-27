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
    // Setup global state before all tests
    test_1.test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        const response = await page.request.get(frontUrl_1.default);
        await page.waitForLoadState("load");
        await (0, test_1.expect)(response).toBeOK();
        await context.close();
    });
    // Basics
    test_1.test.describe("Basics", () => {
        test_1.test.describe("layout", () => {
            test_1.test.describe("status", t.layoutStatus);
            test_1.test.describe("footer", t.footerLinks);
        });
        test_1.test.describe("home", t.home);
        test_1.test.describe("nav", () => {
            test_1.test.describe("nav status", t.navStatus);
            test_1.test.describe("has logo", t.hasLogo);
            test_1.test.describe("links work", t.linksWork);
            test_1.test.describe("icon hovers", t.iconHovers);
        });
    });
    // Shop
    test_1.test.describe("shop", () => {
        test_1.test.describe("layout", t.shopLayout);
        test_1.test.describe("sub-header", t.subheader);
        test_1.test.describe("searchBox", t.shopSearchBox);
        // filters
        test_1.test.describe("filters", () => {
            // test.describe("new sort", t.newOrder);
            test_1.test.describe("categories", t.categories);
            test_1.test.describe("filters", t.filters);
            // test.describe("gender filtering", t.genderFiltering); // is failing for find incorrect hit gender
            test_1.test.describe("gender filter", t.genderFilterWhenNecessary);
            test_1.test.describe("productType filtering", t.productTypeFiltering);
            // test.describe("priceRange", t.priceRange); // Ver hits que tienen subitems en sale en reunion
            test_1.test.describe("socks height", t.socksHeight);
            test_1.test.describe("brands", t.brands);
            test_1.test.describe("filter sticky", t.filterSticky);
            test_1.test.describe("flavor", t.flavorInAccessories);
            test_1.test.describe("colors", t.colors);
            test_1.test.describe("searchers", t.searchers);
            test_1.test.describe("sizes", t.sizesSplit);
            test_1.test.describe("bra", t.bra);
            test_1.test.describe("load more button", t.loadMoreButton);
        });
        test_1.test.describe("refinementsComponent", () => {
            test_1.test.describe("clearRefinements", t.clearRefinements);
            test_1.test.describe("tags", t.tags);
        });
        // BreadCrumbs
        test_1.test.describe("breadCrumbs", () => {
            test_1.test.describe("status", t.status);
            test_1.test.describe("navigate", t.navigate);
            test_1.test.describe("urlCorrelation", t.urlCorrelation);
        });
        // Hits
        test_1.test.describe("hits", () => {
            test_1.test.describe("include Width", t.includeWidth);
            test_1.test.describe("kid tags", t.kidTags);
        });
        // Banner
        // test.describe("banner", t.banner); // wait to merge new branch
    });
    // Product Page
    test_1.test.describe("productPage", () => {
        test_1.test.describe("Images", t.selectionImages);
        test_1.test.describe("slight zoom in when hovering over images", t.lightHover);
        // test.describe("Carousel", t.uniqueProductsOnCarousel);
        test_1.test.describe("Brand logo", t.brandLogoLink);
        // test.describe("size chart", t.sizeChart); // necesita arreglar el sizeChart de apparel
        test_1.test.describe("double size in unisex hit", t.doubleSizes);
    });
    // Details
    test_1.test.describe("prefooter", () => {
        test_1.test.describe("title", t.comeWithText);
    });
    test_1.test.describe("footer", () => {
        test_1.test.describe("ability to edit", t.abilityToEdit);
    });
    // Account
    test_1.test.describe("account", () => {
        test_1.test.describe("login", t.login);
        test_1.test.describe("logout", t.logout);
        test_1.test.describe("icon", t.accountIcon);
    });
    // Components
    test_1.test.describe("components", () => {
        test_1.test.describe("contentCardGrid", t.contentCardGrid);
    });
}
exports.default = createTest;
createTest();

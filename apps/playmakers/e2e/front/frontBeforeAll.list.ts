import { test, expect } from "@playwright/test";
import url from "../config/frontUrl";
import * as t from "./spec";

export default function createTest() {
  // Setup global state before all tests
  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const response = await page.request.get(url);
    await page.waitForLoadState("load");
    await expect(response).toBeOK();
    await context.close();
  });

  // Basics
  test.describe("Basics", () => {
    test.describe("layout", () => {
      test.describe("status", t.layoutStatus);
      test.describe("footer", t.footerLinks);
    });
    test.describe("home", t.home);
    test.describe("nav", () => {
      test.describe("nav status", t.navStatus);
      test.describe("has logo", t.hasLogo);
      test.describe("links work", t.linksWork);
      test.describe("icon hovers", t.iconHovers);
    });
  });

  // Shop
  test.describe("shop", () => {
    test.describe("layout", t.shopLayout);
    test.describe("searchBox", t.shopSearchBox);
    // filters
    test.describe("filters", () => {

      test.describe("new sort", t.newOrder);
      test.describe("filters", t.filters);
      // test.describe("gender filtering", t.genderFiltering); // is failing for find incorrect hit gender
      test.describe("gender filter", t.genderFilterWhenNecessary);
      test.describe("productType filtering", t.productTypeFiltering);
      // test.describe("priceRange", t.priceRange); // Ver hits que tienen subitems en sale en reunion
      test.describe("socks height", t.socksHeight);
      test.describe("brands", t.brands);
      test.describe("filter sticky", t.filterSticky);
      test.describe("flavor", t.flavorInAccessories);
      test.describe("colors", t.colors);
      test.describe("searchers", t.searchers);
      test.describe("sizes", t.sizesSplit);
      test.describe("bra", t.bra);
      test.describe("load more button", t.loadMoreButton);
    });
    test.describe("refinementsComponent", () => {
      test.describe("clearRefinements", t.clearRefinements);
      test.describe("tags", t.tags);
    });
    // BreadCrumbs
    test.describe("breadCrumbs", () => {
      test.describe("status", t.status);
      test.describe("navigate", t.navigate);
      test.describe("urlCorrelation", t.urlCorrelation);
    });
    // Hits
    test.describe("hits", () => {
      test.describe("include Width", t.includeWidth);
      test.describe("kid tags", t.kidTags);
    });
    // Banner
    // test.describe("banner", t.banner); // wait to merge new branch
  });

  // Product Page
  test.describe("productPage", () => {
    test.describe("Images", t.selectionImages);
    test.describe("slight zoom in when hovering over images", t.lightHover);
    // test.describe("Carousel", t.uniqueProductsOnCarousel);
    test.describe("Brand logo", t.brandLogoLink);
    test.describe("size chart", t.sizeChart);
    test.describe("double size in unisex hit", t.doubleSizes);
  });

  // Details
  test.describe("prefooter", () => {
    test.describe("title", t.comeWithText);
  });
  test.describe("footer", () => {
    test.describe("ability to edit", t.abilityToEdit);
  });

  // Account
  test.describe("account", () => {
    test.describe("login", t.login);
    test.describe("logout", t.logout);
    test.describe("icon", t.accountIcon);
  });

  // Components
  test.describe("components", () => {
    test.describe("contentCardGrid", t.contentCardGrid);
  });
}
createTest();

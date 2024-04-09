import { test, expect } from "@playwright/test";
import url from "../config/frontUrl";
import * as t from "./spec";

export default function createTest() {
  test.beforeAll("homeRequest", async ({ browser }) => {
    const page = await browser.newPage();
    const response = await page.request.get(url);
    await expect(response).toBeOK();
    await page.close();
  });

  // Basics
  test.describe("Basics", () => {
    test.describe("layout", t.layoutStatus);
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
    test.describe("filters", () => {
      test.describe("filters", t.filters);
      test.describe("gender filtering", t.genderFiltering);
      test.describe("productType filtering", t.productTypeFiltering);
      test.describe("priceRange", t.priceRange);
      test.describe("brands", t.brands);
      test.describe("filter sticky", t.filterSticky);
      test.describe("flavor", t.flavorInAccessories);
    });
    test.describe("refinementsComponent", () => {
      test.describe("clearRefinements", t.clearRefinements);
      test.describe("tags", t.tags);
    });
    test.describe("breadCrumbs", () => {
      test.describe("status", t.status);
      test.describe("navigate", t.navigate);
      test.describe("urlCorrelation", t.urlCorrelation);
    });
  });

  // Product Page
  test.describe("productPage", () => {
    test.describe("Images on ProductPage", t.selectionImages);
    test.describe("Carousel", t.uniqueProductsOnCarousel);
  });

  // Details
  test.describe("footer", () => {
    test.describe("Title", t.comeWithText);
  });
}
createTest();

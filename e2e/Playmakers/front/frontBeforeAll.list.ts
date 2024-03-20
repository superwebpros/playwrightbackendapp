import { test, expect } from "@playwright/test";
import url from "../config/frontUrl.ts";

import {
  home,
  layout,
  nav,
  shopLayout,
  shopSearchBox,
  filters,
  clearRefinements,
  tags,
  genderFiltering,
  productTypeFiltering,
  filterSticky,
  flavorInAccessories,
  brands,
  priceRange,
  status,
  navigate,
  urlCorrelation,
  ecommerceFlow,
} from "./spec";

test.beforeAll("homeRequest", async ({ browser }) => {
  const page = await browser.newPage();
  const response = await page.request.get(url);
  await expect(response).toBeOK();
  await page.close();
});

// Basics
test.describe("Basics", () => {
  test.describe("layout", layout);
  test.describe("home", home);
  test.describe("nav", nav);
});

// Shop
test.describe("shop", () => {
  test.describe("layout", shopLayout);
  test.describe("searchBox", shopSearchBox);
  // test.describe("ecommerceFlow", ecommerceFlow);
  test.describe("filters", () => {
    test.describe("filters", filters);
    test.describe("gender filtering", genderFiltering);
    test.describe("productType filtering", productTypeFiltering);
    test.describe("priceRange", priceRange);
    test.describe("brands", brands);
    test.describe("filter sticky", filterSticky);
    test.describe("flavor", flavorInAccessories);
  });
  test.describe("refinementsComponent", () => {
    test.describe("clearRefinements", clearRefinements);
    test.describe("tags", tags);
  });
  test.describe("breadCrumbs", () => {
    test.describe("status", status);
    test.describe("navigate", navigate);
    test.describe("urlCorrelation", urlCorrelation);
  });
});

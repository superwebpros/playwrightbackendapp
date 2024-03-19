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
  test.describe("filters", filters);
  test.describe("clearRefinements", clearRefinements);
  test.describe("tags", tags);
  test.describe("gender filtering", genderFiltering);
  test.describe("productType filtering", productTypeFiltering);
  test.describe("filter sticky", filterSticky);
  test.describe("flavor", flavorInAccessories);
});

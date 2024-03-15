import { test, expect } from "@playwright/test";
import url from "../config/frontUrl.ts";
import { chromium } from "playwright";
import {
  home,
  layout,
  nav,
  shopLayout,
  shopSearchBox,
  filters,
  clearRefinements,
} from "./spec";

test.beforeAll("homeRequest", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const response = await page.request.get(url);
  await expect(response).toBeOK();
});

test.describe("layout", layout);
test.describe("home", home);
test.describe("nav", nav);
// Shop
test.describe("shop", () => {
  test.describe("layout", shopLayout);
  test.describe("searchBox", shopSearchBox);
  test.describe("filters", filters);
  test.describe("clearRefinements", clearRefinements);
});

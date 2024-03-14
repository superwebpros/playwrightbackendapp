import { test, expect } from "@playwright/test";
import url from "../config/frontUrl.ts";
import { chromium } from "playwright";
import { home, layout, nav } from "./spec/index.ts";

test.beforeAll("homeRequest", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const response = await page.request.get(url);
  await expect(response).toBeOK();
});

test.describe(home);
test.describe(layout);
test.describe(nav);

import { test, expect } from "@playwright/test";
import url from "../config/frontUrl.ts";
import { chromium } from "playwright";
import { home, layout, nav } from "./spec";

test.beforeAll("homeRequest", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  const response = await page.request.get(url);
  await expect(response).toBeOK();
});

test.describe('Layout',layout);
test.describe('Home',home);
test.describe('Nav',nav);

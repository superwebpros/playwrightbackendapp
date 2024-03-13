import { test, expect } from "@playwright/test";
import url from "../config/frontUrl";
// import home from './home.spec.ts';
import { chromium } from "playwright";

test.beforeAll("homeRequest", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    const response = await page.request.get(url);
    await expect(response).toBeOK();
  });


// home();
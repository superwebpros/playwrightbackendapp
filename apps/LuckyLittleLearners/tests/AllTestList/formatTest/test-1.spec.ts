import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://staging-shop.luckylittlelearners.com/");
  await page.goto("https://staging-shop.luckylittlelearners.com/shop-library");
  await page.goto(
    "https://staging-shop.luckylittlelearners.com/membership-shop"
  );
  await page.goto(
    "https://staging-shop.luckylittlelearners.com/membership-library"
  );
});

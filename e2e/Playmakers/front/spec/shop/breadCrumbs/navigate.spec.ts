import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("navigate", async ({ page }) => {
    await page.goto(url + "/collections/women/apparel");
    await page.waitForLoadState();
    await page.getByRole("link", { name: "〉Women" }).click();
    await page.waitForLoadState();
    await expect(page.url()).toBe(url + "/collections/women");
    await page.getByRole("link", { name: "〉Collections" }).click();
    await page.waitForLoadState();
    await expect(page.url()).toBe(url + "/collections/all");
  });

  test("go to product and navigate from breadcrumbs ", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.waitForTimeout(2000);

    await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .locator(".ais-InfiniteHits-item")
      .first()
      .click();
    await page.waitForLoadState();
    await expect(
      page.locator("form").filter({ hasText: "Add to Cart" }).locator("svg")
    ).toBeVisible();
    await expect(
      page
        .getByRole('link', { name: '〉Collections' })
    ).toBeVisible();
    await page.getByRole('link', { name: '〉Collections' }).click();
    await page.waitForLoadState();
    await expect(page.url()).toBe(url + "/collections/all");
  });
}

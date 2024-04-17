import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("selected filter, refresh and is visible", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.waitForLoadState();
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "Footwear" }).click();
    await page.reload();
    await page.waitForLoadState();
    await expect(
      page.getByTestId("container-filters").getByText("Footwear ✗")
    ).toBeVisible();
  });
  test("selected filter, go to product, go back and is visible", async ({
    page,
  }) => {
    await page.goto(url + "/collections/all");
    await page.waitForLoadState();
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "Footwear" }).click();
    await page.waitForTimeout(2000);
    await page.waitForSelector('.ais-InfiniteHits-list');
    let links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allInnerTexts();
    let linksNames = links.filter((link) => link !== "");
    await page.getByRole("link", { name: `${linksNames[0]}` }).first().click();
    await page.waitForLoadState();
    await page.goBack();
    await page.waitForLoadState();
    await expect(
      page.getByTestId("container-filters").getByText("Footwear ✗")
    ).toBeVisible();
  });
  test("filters are not sticking across product pages", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.waitForLoadState();
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "Footwear" }).click();
    await expect(page.getByTestId('container-filters').getByText('Footwear ✗')).toBeVisible();
    await page.getByRole('button', { name: 'Brand' }).click();
    await expect(page.getByRole('button', { name: 'ASICS' })).toBeVisible();
    await page.getByRole('button', { name: 'ASICS' }).click();
    await page.waitForTimeout(5000)
    await page.getByRole('link', { name: 'Shop' }).hover();
    await expect(page.getByRole('link', { name: 'Apparel' }).nth(1)).toBeVisible();
    await page.getByRole('link', { name: 'Apparel' }).nth(1).click();
    await page.waitForLoadState();
    await page.waitForTimeout(5000)
    await expect(page.getByTestId('clearRefinements')).not.toBeVisible();
  });
}

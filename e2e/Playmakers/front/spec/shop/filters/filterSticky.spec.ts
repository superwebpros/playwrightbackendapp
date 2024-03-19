import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("selected filter, refresh and is visible", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "Footwear" }).click();
    await page.reload();
    await page.waitForLoadState();
    await expect(page.getByTestId('container-filters').getByText('Footwear ✗')).toBeVisible();
  });
  test("selected filter, go to product, go back and is visible", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "Footwear" }).click();

    let links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allInnerTexts();
    let linksNames = links.filter((link) => link !== "");
    
    await page.getByRole("link", { name: `${linksNames[0]}` }).click();
    await page.waitForLoadState();
    await page.goBack();
    await page.waitForLoadState();
    await expect(page.getByTestId('container-filters').getByText('Footwear ✗')).toBeVisible();
  });
}

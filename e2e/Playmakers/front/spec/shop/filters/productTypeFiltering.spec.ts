import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("productType filtering", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await expect(page.getByTestId("container-filters")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Product Type" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "Footwear" }).click();
    await page.waitForTimeout(2000);
    let links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allInnerTexts();
    let linksNames = links.filter((link) => link !== "");
    await page.getByRole("link", { name: `${linksNames[0]}` }).click();
    await page.waitForLoadState();
    await expect(page).toHaveURL(/\/products\//);
    await expect(page.getByRole("link", { name: "〉Footwear" })).toBeVisible();
    await page.goBack();
    await page.waitForLoadState();
    //test apparel
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "Footwear" }).click();
    await page.waitForTimeout(2000);
    await page.getByRole("button", { name: "Apparel" }).click();
    await page.waitForTimeout(2000);
    links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allInnerTexts();
    linksNames = links.filter((link) => link !== "");
    await page.getByRole("link", { name: `${linksNames[0]}` }).click();
    await page.waitForLoadState();
    await expect(page).toHaveURL(/\/products\//);
    await expect(page.getByRole("link", { name: "〉Apparel" })).toBeVisible();
  });
}

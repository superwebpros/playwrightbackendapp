import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("footware and apparel filtering", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.waitForLoadState();
    await expect(page.getByTestId("container-filters")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Product Type" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "Footwear" }).click();
    await page.waitForTimeout(3000);
    await page.waitForSelector('.ais-InfiniteHits-list');
    await page.waitForLoadState('networkidle')

    let links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allInnerTexts();
    let linksNames = links.filter((link) => link !== "");
    await page.getByRole("link", { name: `${linksNames[0]}` }).first().click();
    await page.waitForLoadState();
    await expect(page).toHaveURL(/\/products\//);
    await expect(page.getByRole("link", { name: "〉Footwear" })).toBeVisible();
    await page.goto(url + "/collections/all");
    await page.waitForLoadState();
    //test apparel
    await page.getByTestId('container-filters').getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "Footwear" }).click();
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Apparel" }).click();
    await page.waitForTimeout(3000);

    await page.waitForSelector('.ais-InfiniteHits-list');
    links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allInnerTexts();
    linksNames = links.filter((link) => link !== "");
    await page.getByRole("link", { name: `${linksNames[0]}` }).first().click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/\/products\//);
    await expect(page.getByRole("link", { name: "〉Apparel" })).toBeVisible();
  });
}

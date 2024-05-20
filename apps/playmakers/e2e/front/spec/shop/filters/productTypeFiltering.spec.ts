import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("footware and apparel filtering", async ({ page }) => {
    await page.goto(url + "/collections/all", { waitUntil: "commit" });
    await expect(page.getByTestId("container-filters")).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Product Type" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: "Footwear" }).click();
    await page.waitForLoadState("networkidle");
    await page.waitForSelector(".ais-InfiniteHits-list");

    let links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allInnerTexts();
    let linksNames = links.filter((link) => link !== "");
    await page
      .getByRole("link", { name: `${linksNames[0]}` })
      .first()
      .click();
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL(/\/products\//);
    await expect(page.getByRole("link", { name: "〉Footwear" })).toBeVisible();
    await page.goBack();
    await page.waitForLoadState("networkidle");

    //test apparel
    await page
      .getByTestId("container-filters")
      .getByRole("button", { name: "Product Type" })
      .click();
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: "Footwear" }).click();
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: "Apparel" }).click();
    await page.waitForLoadState("networkidle");
    await page.waitForURL(
      url +
        "/collections/all?shopify_products%5BrefinementList%5D%5Bcollections%5D%5B0%5D=apparel"
    );
    await page.waitForLoadState("networkidle");
    await page.waitForSelector(".ais-InfiniteHits-list");
    links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allInnerTexts();
    linksNames = links.filter((link) => link !== "");
    await page
      .getByRole("link", { name: `${linksNames[0]}` })
      .first()
      .click();
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveURL(/\/products\//);
    await expect(page.getByRole("link", { name: "〉Apparel" })).toBeVisible();
  });
}

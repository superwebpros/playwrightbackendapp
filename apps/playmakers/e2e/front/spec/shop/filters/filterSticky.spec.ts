import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("selected filter, refresh and is visible", async ({ page }) => {
    await page.goto(url + "/collections/all", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: "Footwear" }).click();
    await page.waitForLoadState("networkidle");
    await page.waitForURL(
      url +
        "/collections/all?shopify_products%5BrefinementList%5D%5Bcollections%5D%5B0%5D=footwear"
    );
    await page.reload({ waitUntil: "domcontentloaded" });
    await expect(
      page.getByTestId("container-filters").getByText("Footwear ✗")
    ).toBeVisible();
    await page.close();
  });

  test("selected filter, go to product, go back and is visible", async ({
    page,
  }) => {
    await page.goto(url + "/collections/all", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: "Footwear" }).click();
    await page.waitForLoadState("networkidle");
    await page.waitForSelector(".ais-InfiniteHits-list");
    await page.waitForSelector("[data-testid='hit']");
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
    await page.goBack({ waitUntil: "networkidle" });
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByTestId("container-filters").getByText("Footwear ✗")
    ).toBeVisible();
    await page.close();
  });

  test("filters are not sticking across product pages", async ({ page }) => {
    await page.goto(url + "/collections/all", { waitUntil: "networkidle" });
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: "Footwear" }).click();
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByTestId("container-filters").getByText("Footwear ✗")
    ).toBeVisible();
    await page.getByRole("button", { name: "Brand" }).click();
    await page.waitForLoadState("networkidle");
    await expect(page.getByRole("button", { name: "ASICS" })).toBeVisible();
    await page.getByRole("button", { name: "ASICS" }).click();
    await page.waitForLoadState("networkidle");
    await page.getByRole("link", { name: "Shop" }).hover();
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("link", { name: "Apparel" }).nth(1)
    ).toBeVisible();
    await page.getByRole("link", { name: "Apparel" }).nth(1).click();
    await page.waitForLoadState("networkidle");
    await expect(page.getByTestId("clearRefinements")).not.toBeVisible();
    await page.close();
  });
}

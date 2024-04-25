import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("women gender was filtered", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.waitForLoadState();
    await expect(page.getByTestId("container-filters")).toBeVisible();
    await expect(page.getByRole("button", { name: "Gender" })).toBeVisible();

    // Test men hit filtering
    await page.getByRole("button", { name: "Gender" }).click();
    await page.getByRole("button", { name: "Men", exact: true }).click();
    await page.waitForTimeout(2000);
    let links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allTextContents();
    let linksNames = links.filter((link) => link.includes("Women's"));
    await expect(linksNames.length).toBe(0);

    // Test women hit filtering
    await page.getByRole("button", { name: "Men", exact: true }).click();
    await page.waitForTimeout(1000);
    await page.getByRole("button", { name: "Women", exact: true }).click();
    await page.waitForTimeout(2000);
    await page.waitForSelector(".ais-InfiniteHits-list");
    links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allTextContents();
    linksNames = links.filter((link) => link.includes("Men's"));
    await expect(linksNames.length).toBe(0);
  });
}

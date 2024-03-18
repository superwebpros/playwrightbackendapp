import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("loaded", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await expect(page.getByTestId("container-filters")).toBeVisible();
    await expect(page.getByRole("button", { name: "Gender" })).toBeVisible();
    await page.getByRole("button", { name: "Gender" }).click();
    await page.getByRole("button", { name: "Men", exact: true }).click();
    const links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allTextContents();
      console.log(links);
    const linksNames = links.filter((link) => link.includes("Women's"));
    await expect(linksNames.length).toBe(0);
  });
}

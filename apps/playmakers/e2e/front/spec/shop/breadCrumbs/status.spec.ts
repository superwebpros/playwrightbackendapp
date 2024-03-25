import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("loaded", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.waitForLoadState();
    await expect(
      page.getByRole("link", { name: "〉Collections" })
    ).toBeVisible();
    await page.goto(url + "/collections/women/apparel");
    await page.waitForLoadState();
    await expect(page.getByRole("link", { name: "〉Women" })).toBeVisible();
  });
  
}

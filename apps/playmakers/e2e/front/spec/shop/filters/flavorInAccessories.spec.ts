import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("flavor is visible when accessories is selected", async ({ page }) => {
    await page.goto(url + "/collections/all", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: "Accessories" }).click();
    await page.waitForLoadState("networkidle");
    await expect(page.getByRole("button", { name: "Flavor" })).toBeVisible();
    await page.getByRole("button", { name: "Accessories" }).click();
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("button", { name: "Flavor" })
    ).not.toBeVisible();
    await page.close();
  });
}

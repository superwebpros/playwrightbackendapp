import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("subcategories availables", async ({ page }) => {
    await page.goto(url + "/collections/all", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "footwear" }).click();
    await expect(
      page.getByRole("button", { name: "Categories" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Categories" }).click();
    await expect(page.getByRole("button", { name: "Running" })).toBeVisible();
    await page.getByRole("button", { name: "Running" }).click();
    const data = await page.getByTestId("categoryItem").first().allInnerTexts();
    await expect(data[0]).toContain("Men");
    await page.getByRole("button", { name: "Gender" }).click();
    await page.getByRole("button", { name: "Women", exact: true }).click();
    const updatedData = await page
      .getByTestId("categoryItem")
      .first()
      .allInnerTexts();
    await expect(updatedData[0]).not.toContain("Men");

    await page.getByRole("link", { name: "Shop", exact: true }).hover();
    await page.getByRole("link", { name: "Footwear" }).nth(1).click();
    await page.waitForLoadState("networkidle");

    await page.getByRole("button", { name: "Categories" }).click();
    await page.getByRole("button", { name: "Running" }).click();
    const data2 = await page
      .getByTestId("categoryItem")
      .first()
      .allInnerTexts();
    await expect(data2[0]).not.toContain("Men");

    await page.close();
  });
}

import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("is showing footwear correctly with two sizes", async ({ page }) => {
    await page.goto(`${url}/collections/all`, { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Gender" }).click();
    await page.getByRole("button", { name: "Unisex" }).click();
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "footwear" }).click();
    await page.getByRole('button', { name: 'Size' }).click();
    await page.getByRole('button', { name: 'M 5 / W' }).click();
    await page.waitForTimeout(1500);
    const data = await page.getByTestId("hit").first().allInnerTexts();
    await page.getByTestId("hit").first().click();
    await page.waitForLoadState("networkidle");
    const sizeData = await page.getByTestId("size").first().allInnerTexts();
    expect(sizeData[0]).toContain("M");
    expect(sizeData[0]).toContain("W");
    await page.close();
  });
}

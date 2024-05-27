import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("is showing correctly two sizes", async ({ page }) => {
    await page.goto(`${url}/collections/all`, { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Gender" }).click();
    await page.getByRole("button", { name: "Unisex" }).click();
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "footwear" }).click();
    await page.waitForTimeout(1500);
    const data = await page.getByTestId("hit").first().allInnerTexts();
    console.log(data);
    await page.getByTestId("hit").first().click();
    await page.waitForLoadState("networkidle");
    const sizeData = await page.getByTestId("size").first().allInnerTexts();
    console.log(sizeData);
    expect(sizeData[0]).toContain("M");
    expect(sizeData[0]).toContain("W");
  });
}

import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("shows correctly", async ({ page }) => {
    await page.goto(`${url}/collections/all`, { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: "footwear" }).click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(2000);
    const hit = await page.getByTestId("hit").first().allTextContents();
    console.log("hit", hit);
    await page.getByTestId("hit").first().click();
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("button", { name: "sizeChartRuler Size Chart" })
    ).toBeVisible();
    await page
      .getByRole("button", { name: "sizeChartRuler Size Chart" })
      .click();
    await page.waitForSelector("iframe");
    let iframeElement: any = await page.$("iframe");
    let iframeSrc: any = await iframeElement.getAttribute("src");
    await expect(iframeSrc).toContain("https://www.cognitoforms.com");
    await page.goto(`${url}/collections/all`, { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: "apparel" }).click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(1000);
    await page.getByTestId("hit").first().click();
    await page.waitForLoadState("networkidle");
    await page.waitForTimeout(1000);
    await expect(
      page.getByRole("button", { name: "sizeChartRuler Size Chart" })
    ).toBeVisible();
    await page
      .getByRole("button", { name: "sizeChartRuler Size Chart" })
      .click();
    await page.waitForSelector("iframe");
    iframeElement = await page.$("iframe");
    iframeSrc = await iframeElement.getAttribute("src");
    await expect(iframeSrc).toContain("https://www.cognitoforms.com");
    await page.close();
  });
}

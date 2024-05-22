import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("searches", async ({ page }) => {
    await page.goto(url + "/collections/all", { waitUntil: "networkidle" });

    const searchBox = await page.waitForSelector(
      '[data-testid="shopSearchBox"]'
    );
    const isVisible = await searchBox.isVisible();
    expect(isVisible).toBe(true);
    await searchBox.click();
    const inputField = await searchBox.$('input[type="search"]');
    if (inputField === null) {
      throw new Error("Input field not found within the search box.");
    }
    await inputField.fill("SWP test value");
    await page.waitForURL(
      `**/collections/all?shopify_products%5Bquery%5D=SWP%20test%20value`
    );
    const currentURL = page.url();
    expect(currentURL).toContain(
      "?shopify_products%5Bquery%5D=SWP%20test%20value"
    );
  });
}

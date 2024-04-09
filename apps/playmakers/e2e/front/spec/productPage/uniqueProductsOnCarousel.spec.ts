import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("Carousel has uniques products", async ({ page }) => {
    await page.goto(`${url}/collections/all`);
    await page.getByTestId("hit").first().click();
    await page.waitForLoadState();
    await expect(page.getByTestId("frequentlyCarousel")).toBeVisible();
    const all = await page.getByTestId('cardCarousel').all();
    for (let i = 0; i < all.length; i++) {
      for (let j = i + 1; j < all.length; j++) {
        await expect(all[i].textContent()).not.toBe(all[j].textContent());
      }
    }
  });
}

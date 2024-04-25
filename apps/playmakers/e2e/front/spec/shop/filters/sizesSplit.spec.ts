import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("gender sizes are being separated", async ({ page }) => {
    // Check womens sizes
    await page.goto(url + "/collections/women/footwear");
    await page.waitForLoadState();
    await page.getByRole("button", { name: "Size" }).click();
    const womenSizes = await page.getByTestId("sizeValue").allInnerTexts();
    let correct = true;
    womenSizes.map((size) => {
      if (Number(size) > 12 || Number(size) < 5) {
        correct = false;
      }
    });
    await expect(correct).toBeTruthy();
    // Check men sizes
    await page.goto(url + "/collections/men/footwear");
    await page.waitForLoadState();
    await page.getByRole("button", { name: "Size" }).click();
    const menSizes = await page.getByTestId("sizeValue").allInnerTexts();
    correct = true;
    menSizes.map((size) => {
      if (Number(size) > 17 || Number(size) < 7) {
        correct = false;
      }
    });
    await expect(correct).toBeTruthy();

    // Check Kids sizes
    await page.goto(url + "/collections/kids/footwear");
    await page.waitForLoadState();
    await page.getByRole("button", { name: "Size" }).click();
    const kidSizes = await page.getByTestId("sizeValue").allInnerTexts();
    correct = true;
    kidSizes.map((size) => {
      if (Number(size) > 5 || Number(size) < 1) {
        correct = false;
      }
    });
    await expect(correct).toBeTruthy();
  });
}

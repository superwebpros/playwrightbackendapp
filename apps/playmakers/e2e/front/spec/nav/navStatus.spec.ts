import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("nav, search and account buttons are visible", async ({ page }) => {
    await page.goto(url);
    await expect(page.getByTestId("nav")).toBeVisible();
    await expect(page.getByTestId("favoriteButton")).toBeVisible();
  });
}

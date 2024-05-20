import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("search and account buttons visible", async ({ page }) => {
    await page.goto(url, { waitUntil: "commit" });
    await expect(page.getByTestId("nav")).toBeVisible();
    await expect(page.getByTestId("favoriteButton")).toBeVisible();
  });
}

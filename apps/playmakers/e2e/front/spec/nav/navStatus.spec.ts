import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("nav, search and account buttons are visible", async ({ page }) => {
    await page.goto(url, { waitUntil: "networkidle" });
    await expect(page.getByTestId("nav")).toBeVisible();
    await expect(page.getByTestId("favoriteButton")).toBeVisible();
    await page.close();
  });
  test("nav sticky on scroll", async ({ page }) => {
    await page.goto(url, { waitUntil: "networkidle" });
    await expect(page.getByTestId("nav")).toBeVisible();
    await page.evaluate(() => window.scrollTo(0, 5000));
    await expect(page.getByTestId("nav")).toBeVisible();
    await page.close();
  });
}

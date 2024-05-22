import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("has logo", async ({ page }) => {
    await page.goto(url, { waitUntil: "networkidle" });
    await expect(page.getByTestId("nav")).toBeVisible();
    await expect(page.getByTestId("logo-link")).toBeVisible();
  });
}

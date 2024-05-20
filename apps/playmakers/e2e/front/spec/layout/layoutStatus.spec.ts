import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("loads", async ({ page }) => {
    await page.goto(url, { waitUntil: "commit" });
    await expect(page.getByTestId("infoBanner")).toBeVisible();
    await expect(page.getByTestId("nav")).toBeVisible();
    await expect(page.getByTestId("preFooter")).toBeVisible();
    await expect(page.getByTestId("flowbite-footer")).toBeVisible();
    await page.waitForLoadState("networkidle");
    await page.evaluate(() => window.scrollTo(0, 5000));
    await page.waitForLoadState("networkidle");
  });
}

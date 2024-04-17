import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("loads", async ({ page }) => {
    await page.goto(url);
    await page.waitForLoadState();
    await expect(page.getByTestId("infoBanner")).toBeVisible();
    await expect(page.getByTestId("nav")).toBeVisible();
    await expect(page.getByTestId("preFooter")).toBeVisible();
    await expect(page.getByTestId("flowbite-footer")).toBeVisible();
  });
}

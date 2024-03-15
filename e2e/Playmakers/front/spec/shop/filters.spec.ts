import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("loaded", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await expect(page.getByTestId("nav")).toBeVisible();
    await expect(page.getByTestId("nav-links")).toBeVisible();
    await expect(page.getByTestId("shopContainer")).toBeVisible();
  });
}

import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("loads", async ({ page }) => {
    await page.goto(url + "/collections/all", { waitUntil: 'networkidle' });
    await expect(page.getByTestId("nav")).toBeVisible();
    await expect(page.getByTestId("nav-links")).toBeVisible();
    await expect(page.getByTestId("shopContainer")).toBeVisible();
    await expect(page.getByTestId("shopBreadcrumbs")).toBeVisible();
    await expect(page.getByTestId("shopSearchBox")).toBeVisible();
    await expect(page.getByTestId("infiniteHits")).toBeVisible();
    await expect(page.getByTestId("shopHeader")).toBeVisible();
    await page.close();
  });
}

import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("is showing all available colors", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.waitForLoadState();
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "Footwear" }).click();
    await expect(page.getByRole("button", { name: "Brand" })).toBeVisible();
    await page.getByRole("button", { name: "Brand" }).click();
    await page.getByRole('button', { name: 'On', exact: true }).click();
    await expect(page.getByRole("button", { name: "Colors" })).toBeVisible();
    await page.getByRole("button", { name: "Colors" }).click();
    await expect(page.getByTestId("others-colors")).toBeVisible();
  });
}

import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("loaded", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await expect(page.getByTestId("container-filters")).toBeVisible();
    await expect(page.getByRole("button", { name: "Gender" })).toBeVisible();
    await page.getByRole("button", { name: "Gender" }).click();
    await page.getByRole('button', { name: 'Women' }).click();
  });
}
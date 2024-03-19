import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("appears when filter is selected", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.getByRole("button", { name: "Gender" }).click();
    await page.getByRole("button", { name: "Women" }).click();
    await expect(
      page.getByRole("button", { name: "Clear refinements" })
    ).toBeVisible();
  });

  test("disappears when clic on it", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.getByRole("button", { name: "Gender" }).click();
    await page.getByRole("button", { name: "Women" }).click();
    await expect(
      page.getByRole("button", { name: "Clear refinements" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Clear refinements" }).click();
    await expect(
      page.getByRole("button", { name: "Clear refinements" })
    ).not.toBeVisible();
  });

  test("disappears when filters is deselected", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.getByRole("button", { name: "Gender" }).click();
    await page.getByRole("button", { name: "Women" }).click();
    await expect(
      page.getByRole("button", { name: "Clear refinements" })
    ).toBeVisible();
    await page.getByRole("button", { name: "Women" }).click();
    await expect(
      page.getByRole("button", { name: "Clear refinements" })
    ).not.toBeVisible();
  });
}

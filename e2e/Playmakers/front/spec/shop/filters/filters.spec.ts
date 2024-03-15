import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("loaded", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await expect(page.getByTestId("container-filters")).toBeVisible();
    await expect(page.getByRole("button", { name: "Gender" })).toBeVisible();
  });

  test("initial filters configuration", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await expect(page.getByRole("button", { name: "Gender" })).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Product Type" })
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Brand" })).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Price Range" })
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Categories" })
    ).not.toBeVisible();
    await expect(page.getByRole("button", { name: "Size" })).not.toBeVisible();
    await expect(page.getByRole("button", { name: "Width" })).not.toBeVisible();
    await expect(
      page.getByRole("button", { name: "Colors" })
    ).not.toBeVisible();
    await expect(
      page.getByRole("button", { name: "Clear refinements" })
    ).not.toBeVisible();
  });
}

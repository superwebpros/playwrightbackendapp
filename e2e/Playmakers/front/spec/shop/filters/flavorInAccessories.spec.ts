import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("flavor is visible when accessories is selected", async ({
    page,
  }) => {
    await page.goto(url + "/collections/all");
    await page.waitForLoadState();
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "Accessories" }).click();
    await expect(page.getByRole("button", { name: "Flavor" })).toBeVisible();
    await page.getByRole("button", { name: "Accessories" }).click();
    await expect(page.getByRole("button", { name: "Flavor" })).not.toBeVisible();
  });
}

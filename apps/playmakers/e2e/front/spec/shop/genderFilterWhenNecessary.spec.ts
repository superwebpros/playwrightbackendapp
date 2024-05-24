import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

const wides = ["Regular", "Wide", "Extra Wide", "Narrow"];
export default function createTest() {
  test("appears when is necessary", async ({ page }) => {
    await page.goto(url + "/collections/all", {
      waitUntil: "networkidle",
    });
    await expect(page.getByRole("button", { name: "Gender" })).toBeVisible();
    await page.goto(url + "/collections/brooks", {
      waitUntil: "networkidle",
    });
    await expect(page.getByRole("button", { name: "Gender" })).toBeVisible();

    // not be visible in...
    await page.goto(url + "/collections/men", {
      waitUntil: "networkidle",
    });
    await expect(
      page.getByRole("button", { name: "Gender" })
    ).not.toBeVisible();
    await page.goto(url + "/collections/women", {
      waitUntil: "networkidle",
    });
    await expect(
      page.getByRole("button", { name: "Gender" })
    ).not.toBeVisible();
    await page.goto(url + "/collections/kids", {
      waitUntil: "networkidle",
    });
    await expect(
      page.getByRole("button", { name: "Gender" })
    ).not.toBeVisible();
    await page.close();
  });
}

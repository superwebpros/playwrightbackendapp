import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("loaded", async ({ page }) => {
    await page.goto(url + "/collections/all", { waitUntil: "networkidle" });

    await expect(
      page.getByRole("link", { name: "〉Collections" })
    ).toBeVisible();
    await page.goto(url + "/collections/women/apparel", {
      waitUntil: "commit",
    });

    await expect(page.getByRole("link", { name: "〉Women" })).toBeVisible();
  });
}

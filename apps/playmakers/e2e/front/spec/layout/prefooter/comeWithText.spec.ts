import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("Come Visit Us spelled correctly", async ({ page }) => {
    await page.goto(url, { waitUntil: "networkidle" });

    await expect(
      page.getByRole("heading", { name: "Come Visit Us", exact: true })
    ).toBeVisible();
  });
}

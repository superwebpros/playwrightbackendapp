import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("have title", async ({ page }) => {
    await page.goto(url + '/giving-back', { waitUntil: "networkidle" });
    await expect(page.getByTestId("contentCardGridTitle")).toBeVisible();
    await page.close();
  });
}

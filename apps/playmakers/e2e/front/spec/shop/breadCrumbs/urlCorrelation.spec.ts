import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("url correlation", async ({ page }) => {
    await page.goto(url + "/collections/women/apparel", {
      waitUntil: "commit",
    });
    await expect(page.getByRole("link", { name: "〉Women" })).toBeVisible();
    await page.reload();
    await expect(page.getByRole("link", { name: "〉Women" })).toBeVisible();
    await page.close();
  });
}

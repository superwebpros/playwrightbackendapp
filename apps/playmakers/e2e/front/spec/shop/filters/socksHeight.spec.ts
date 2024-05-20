import { expect, test } from "playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("appears only when socks are selected", async ({ page }) => {
    await page.goto(url + "/collections/all", { waitUntil: "commit" });
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: "socks", exact: true }).click();
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("button", { name: "Socks Height" })
    ).toBeVisible();

    // Check that socks height is not visible when socks are not selected
    await page.getByRole("button", { name: "socks", exact: true }).click();
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("button", { name: "Socks Height" })
    ).not.toBeVisible();
  });
}

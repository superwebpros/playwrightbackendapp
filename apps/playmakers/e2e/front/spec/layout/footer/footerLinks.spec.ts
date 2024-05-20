import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("navigate from footer when are on shop", async ({ page }) => {
    await page.goto(url + "/collections/all", { waitUntil: "commit" });
    await expect(page.getByTestId("flowbite-footer")).toBeVisible();
    await page.getByRole("link", { name: "Who We Are" }).click();
    await page.waitForLoadState("networkidle");
    await expect(page.url()).toBe(url + "/about");
  });
}

import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("navigate", async ({ page }) => {
    await page.goto(url + "/collections/women/apparel");
    await page.waitForLoadState();
    await page.getByRole("link", { name: "〉Women" }).click();
    await page.waitForLoadState();
    await expect(page.url()).toBe(url + "/collections/women");
    await page.getByRole('link', { name: '〉Collections' }).click();
    await page.waitForLoadState();
    await expect(page.url()).toBe(url + "/collections/all");
  });
}

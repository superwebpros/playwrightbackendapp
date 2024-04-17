import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("navigate from footer when are on shop", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.waitForLoadState();
    await expect(page.getByTestId("flowbite-footer")).toBeVisible();
    await page.getByRole("link", { name: "Who We Are" }).click();
    await page.waitForLoadState();
    console.log(url+"/about")
    await expect(page.url()).toBe(url + "/about");
  });
}

import { test, expect } from "@playwright/test";
import url from "../config/frontUrl";

// test("homeRequest", async ({ page }) => {
//   const response = await page.request.get(url);
//   // console.log(response.status());
//   await expect(response).toBeOK();
// });

export default function createTest() {
  test("home", async ({ page }) => {
    await page.goto(url);
    await expect(page.getByTestId("home")).toBeVisible();
    await expect(page.getByTestId("hero")).toBeVisible();
  });
}

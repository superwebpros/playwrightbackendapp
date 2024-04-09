import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("principal img change when clic on secondaries imgs", async ({ page }) => {
    await page.goto(`${url}`);
    await page.getByPlaceholder("I'm shopping for").click();
    await page.waitForTimeout(2000);
    await expect(page.getByTestId("popupContainer")).toBeVisible();
    await page.getByPlaceholder("I'm shopping for").fill("S29055-33");
    await page.waitForTimeout(1000);
    await expect(
      page.getByRole("link", { name: "Spitfire 5" }).first()
    ).toBeVisible();
    await page.getByRole("link", { name: "Spitfire 5" }).first().click();
    await page.waitForLoadState();
    await expect(page.url()).toContain(`${url}/products/`);
    await expect(page.getByTestId('principalImg')).toBeVisible();
    const img = await page.getByTestId('principalImg').getAttribute('src');
    console.log(img)
    await expect(page.getByTestId('secondaryImgs')).toBeVisible();
    await expect(page.getByTestId('secondImg').first()).toBeVisible();
    const secondImg= await page.getByTestId('secondImg').first().getAttribute('src');
    await expect(secondImg===img).toBe(false);
    await page.getByTestId('secondImg').first().click();
    expect(await page.getByTestId('principalImg').getAttribute('src')).toBe(secondImg);
  });

}

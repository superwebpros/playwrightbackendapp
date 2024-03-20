import { expect, test } from "playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("tags work", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.waitForLoadState();
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "Footwear" }).click();
    const Footwear = await page
      .getByTestId("container-filters")
      .getByText("Footwear ✗");
    await expect(Footwear).toBeVisible();
    await Footwear.click();
    await expect(Footwear).not.toBeVisible();
  });
}

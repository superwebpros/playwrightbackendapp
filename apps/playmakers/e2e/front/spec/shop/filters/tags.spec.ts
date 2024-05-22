import { expect, test } from "playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("tags work", async ({ page }) => {
    await page.goto(url + "/collections/all", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Product Type" }).click();
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: "Footwear" }).click();
    await page.waitForLoadState("networkidle");
    await page.waitForURL(
      url +
        "/collections/all?shopify_products%5BrefinementList%5D%5Bcollections%5D%5B0%5D=footwear"
    );
    const Footwear = await page
      .getByTestId("container-filters")
      .getByText("Footwear ✗");
    await expect(Footwear).toBeVisible();
    await Footwear.click();
    await page.waitForLoadState("networkidle");
    await expect(Footwear).not.toBeVisible();
  });
}

import { expect, test } from "playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("is showing size for men and women at the same tag", async ({
    page,
  }) => {
    await page.goto(url + "/collections/all", { waitUntil: "networkidle" });

    // first i ckeck if the sizes are showing for both genders in unisex products
    await page.getByRole("button", { name: "Gender" }).click();
    await page.getByRole("button", { name: "Unisex" }).click();

    await page.getByRole("button", { name: "Product Type" }).click();
    await page.getByRole("button", { name: "Footwear" }).click();
    await page.getByRole("button", { name: "Size" }).click();
    let sizes = await page.getByTestId("sizeValue").allInnerTexts();
    for (let size of sizes) {
      expect(size).toContain("M");
      expect(size).toContain("W");
    }

    // i deselect the unisex tag and check if the sizes are showing independently
    await page.getByRole("button", { name: "Unisex" }).click();

    sizes = await page.getByTestId("sizeValue").allInnerTexts();
    for (let size of sizes) {
      expect(size).not.toContain("M");
      expect(size).not.toContain("W");
    }
  });
}

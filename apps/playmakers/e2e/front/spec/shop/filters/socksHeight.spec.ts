import { expect, test } from "playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("appears only when socks are selected", async ({
    page,
  }) => {
    await page.goto(url + "/collections/all");
    await page.waitForLoadState();
    await page.getByRole("button", { name: "Product Type" }).click();
    // await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'socks', exact: true }).click();
    // await page.waitForTimeout(1000);
    await expect(
      page.getByRole("button", { name: "Socks Height" })
    ).toBeVisible();

    // Check that socks height is not visible when socks are not selected
    await page.getByRole('button', { name: 'socks', exact: true }).click();
    // await page.waitForTimeout(1000);
    await expect(
      page.getByRole("button", { name: "Socks Height" })
    ).not.toBeVisible();
    // await page.waitForTimeout(3000);
  });
}

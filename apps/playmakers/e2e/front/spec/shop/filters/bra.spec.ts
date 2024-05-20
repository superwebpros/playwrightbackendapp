import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("cup size available and filtering", async ({ page }) => {
    await page.goto(url + "/collections/all", { waitUntil: "commit" });
    await expect(
      page.getByTestId("shopSearchBox").getByRole("searchbox")
    ).toBeVisible();
    await page.getByTestId("shopSearchBox").click();
    await page.waitForLoadState('networkidle');
    await page.getByTestId("shopSearchBox").type(`bra `);
    await page.waitForLoadState("networkidle");
    await expect(page.getByRole("button", { name: "Cup Size" })).toBeVisible();
    await page.getByRole("button", { name: "Cup Size" }).click();
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByTestId("container-filters").getByText("bra ✗")
    ).toBeVisible();
  });
}

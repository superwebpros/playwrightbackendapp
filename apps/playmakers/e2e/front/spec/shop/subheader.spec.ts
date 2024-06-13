import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("links works", async ({ page }) => {
    await page.goto(url + "/collections/all", { waitUntil: "networkidle" });
    const link = await page
      .getByTestId("subheader")
      .getByRole("link")
      .first()
      .getAttribute("href");

    const link2 = await page
      .getByTestId("subheader")
      .getByRole("link")
      .nth(1)
      .getAttribute("href");
    const link3 = await page
      .getByTestId("subheader")
      .getByRole("link")
      .nth(2)
      .getAttribute("href");

    await page.getByTestId("subheader").getByRole("link").first().click();
    await page.waitForLoadState("networkidle");
    await expect(page.url()).toContain(link.split(".com/")[1]);

    await page.goBack();
    await page.waitForLoadState("networkidle");
    await page.getByTestId("subheader").getByRole("link").nth(1).click();
    await page.waitForLoadState("networkidle");
    await expect(page.url()).toContain(link2.split(".com/")[1]);

    await page.goBack();
    await page.waitForLoadState("networkidle");
    await page.getByTestId("subheader").getByRole("link").nth(2).click();
    await page.waitForLoadState("networkidle");
    await expect(page.url()).toContain(link3.split(".com/")[1]);

    await page.close();
  });
}

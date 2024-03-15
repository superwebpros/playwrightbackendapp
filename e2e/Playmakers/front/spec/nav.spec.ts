import { test, expect } from "@playwright/test";
import url from "../../config/frontUrl";

export default function createTest() {
  test("navLinks", async ({ page }) => {
    await page.goto(url);
    await expect(page.getByTestId("nav")).toBeVisible();
    await expect(page.getByTestId("nav-links")).toBeVisible();
    const links = await page.getByTestId("nav-links").allInnerTexts();
    if (links) {
      const separatedArray = links[0].split("\n");
      for (const link of separatedArray) {
        await page
          .getByTestId("nav-links")
          .getByRole("link", { name: `${link}` })
          .click();
        await page.waitForLoadState("domcontentloaded");
      }
    }
  });

  test("haveLogo", async ({ page }) => {
    await page.goto(url);
    await expect(page.getByTestId("nav")).toBeVisible();
    await expect(page.getByTestId("logo-link")).toBeVisible();
  });
  
  test("searchAndAccountButtons", async ({ page }) => {
    await page.goto(url);
    await expect(page.getByTestId("nav")).toBeVisible();
    await expect(page.getByTestId("favoriteButton")).toBeVisible();
  });
}

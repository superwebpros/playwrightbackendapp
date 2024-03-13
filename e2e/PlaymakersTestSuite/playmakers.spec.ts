import { test, expect } from "@playwright/test";
import url from "./url";

// test("layout", async ({ page }) => {
//   await page.goto(url);
//   await expect(page.getByTestId("infoBanner")).toBeVisible();
//   await expect(page.getByTestId("nav")).toBeVisible();
//   await expect(page.getByTestId("preFooter")).toBeVisible();
//   await expect(page.getByTestId("flowbite-footer")).toBeVisible();
// });

test("home", async ({ page }) => {
  await page.goto(url);
  await expect(page.getByTestId("home")).toBeVisible();
  await expect(page.getByTestId("hero")).toBeVisible();
});

test("nav", async ({ page }) => {
  await page.goto(url);
  await expect(page.getByTestId("nav")).toBeVisible();
  await expect(page.getByTestId("nav-links")).toBeVisible();
  const links = await page.getByTestId("nav-links").allInnerTexts();

  if (links) {
    const separatedArray = links[0].split("\n");
    for (const link of separatedArray) {
      // await page.getByRole('link', { name: `${link}` })
      await page.getByTestId('nav-links').getByRole('link', { name: `${link}` }).click();
    }
  }
});

import { test, expect } from "@playwright/test";

test("home", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByTestId("home")).toBeVisible();
  await expect(page.getByTestId("infoBanner")).toBeVisible();
  await expect(page.getByTestId("nav")).toBeVisible();
  await expect(page.getByTestId("hero")).toBeVisible();
  await expect(page.getByTestId("preFooter")).toBeVisible();
  await expect(page.getByTestId("flowbite-footer")).toBeVisible();
});

test("nav", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.getByTestId("nav")).toBeVisible();
  await expect(page.getByTestId("nav-links")).toBeVisible();
  const links = await page.getByTestId("nav-links").allInnerTexts();
  const separatedArray = links[0].split("\n")
  console.log(separatedArray);
// pruebo si nav-links contiene link con los nombres dentro del array
// await page.getByRole('link', { name: 'Shop', exact: true }).click();
// await page.getByRole('link', { name: 'Learn' }).click();
// await page.getByRole('link', { name: 'About' }).click();
// await page.getByRole('link', { name: 'Events & Training' }).click();
});

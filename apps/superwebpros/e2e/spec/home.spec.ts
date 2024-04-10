import { test, expect } from "@playwright/test";

export default function createTest() {
  test("home", async ({ page }) => {
    await page.goto("https://www.superwebpros.com/");
    await page.getByRole("link", { name: "Bonuses Included" }).click();
    await expect(page.getByText("Pro-fessional WP Theme Bundle")).toBeVisible();
  });
};

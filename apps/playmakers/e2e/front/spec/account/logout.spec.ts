import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("can log out", async ({ page }) => {
    await page.goto(url, { waitUntil: "commit" });
    await expect(page.getByTestId("nav")).toBeVisible();
    await page.getByTestId("accountButtonInactive").click();
    await page.waitForLoadState("domcontentloaded");
    await page.getByPlaceholder("Email address").fill("leandrosavat@gmail.com");
    await page.getByPlaceholder("Password").fill("Lea12345");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.waitForSelector("button:has-text('Sign out')");
    await expect(page.getByRole("button", { name: "Sign out" })).toBeVisible();
    await page.getByRole("button", { name: "Sign out" }).click();
    await page.waitForLoadState("networkidle");
    await expect(page.getByTestId("accountButtonInactive")).toBeVisible();
  });
}

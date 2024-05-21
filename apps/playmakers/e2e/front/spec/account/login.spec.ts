import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  return test("log out and user information is visible", async ({ page }) => {
    await page.goto(url, { waitUntil: "commit" });
    await expect(page.getByTestId("nav")).toBeVisible();
    await page.getByTestId("accountButtonInactive").click();
    await page.waitForLoadState("networkidle");
    await page.getByPlaceholder("Email address").fill("leandrosavat@gmail.com");
    await page.getByPlaceholder("Password").fill("Lea12345");
    await page.getByRole("button", { name: "Sign in" }).click();
    await page.waitForLoadState("networkidle");
    await page.waitForSelector("button:has-text('Sign out'):enabled");
    await expect(page.getByRole("button", { name: "Sign out" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Orders" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Profile" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Addresses" })).toBeVisible();
    await page.getByRole("link", { name: "Profile" }).click();
    await page.waitForLoadState("networkidle");
    await expect(page.getByText("Personal information")).toBeVisible();
    await expect(page.getByRole("button", { name: "Update" })).toBeVisible();
    await page.getByRole("link", { name: "Addresses" }).click();
    await page.waitForLoadState("networkidle");
    await expect(
      page.getByRole("heading", { name: "Addresses" })
    ).toBeVisible();
    await expect(page.getByRole("button", { name: "Sign out" })).toBeVisible();
  });
}

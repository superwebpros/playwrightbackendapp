import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("has wide", async ({ page }) => {
    // test on collections all
    await page.goto(url + "/collections/all", {
      waitUntil: "networkidle",
    });
    await expect(page.getByRole("button", { name: "Load More" })).toBeVisible();
    // test button in collections men, women y kids
    await page.goto(url + "/collections/men", {
      waitUntil: "networkidle",
    });
    await expect(page.getByRole("button", { name: "Load More" })).toBeVisible();
    await page.goto(url + "/collections/women", {
      waitUntil: "networkidle",
    });
    await expect(page.getByRole("button", { name: "Load More" })).toBeVisible();
    await page.goto(url + "/collections/kids", {
      waitUntil: "networkidle",
    });
    await expect(page.getByRole("button", { name: "Load More" })).toBeVisible();
    await page.close();
  });
}

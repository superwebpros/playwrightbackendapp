import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("works", async ({ page }) => {
    await page.goto(url + "/collections/men/footwear");
    await page.waitForLoadState();

    // Category search
    await page.getByRole("button", { name: "Categories" }).click();
    await page
      .getByTestId("container-filters")
      .getByPlaceholder("Search for a category...")
      .fill("Neutral");
    let data = await page.getByTestId("container-filters").allInnerTexts();
    let splitData = data[0].split("\n").map((text) => text.trim());
    // console.log(splitData);
    expect(splitData.length).toBe(6);

    // Brand search
    await page.getByRole("button", { name: "Brand" }).click();
    await page
      .getByTestId("container-filters")
      .getByTestId("brands-search-input")
      .fill("Altra");
    data = await page
      .getByTestId("container-filters")
      .getByTestId("brands-search-input")
      .allInnerTexts();
    splitData = data[0].split("\n").map((text) => text.trim());
    // console.log(splitData);
    expect(splitData.length).toBe(6);
  });
}

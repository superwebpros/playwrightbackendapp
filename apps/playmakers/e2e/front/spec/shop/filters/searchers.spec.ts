import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("works", async ({ page }) => {
    await page.goto(url + "/collections/men/footwear", { waitUntil: "commit" });

    // Category search
    await page.getByRole("button", { name: "Categories" }).click();
    await page.waitForLoadState("networkidle");
    let searchText = "neutral";
    await page
      .getByTestId("container-filters")
      .getByPlaceholder("Search for a category...")
      .type(searchText, { delay: 100 });

    let data = await page.getByTestId("categorySearchResults").allInnerTexts();
    let splitData = data[1].split("\n").map((text) => text.trim());
    let splitDataCount = splitData.filter(
      (text) => !text.toLowerCase().includes(searchText.toLowerCase())
    );

    expect(splitDataCount.length).toBe(0);
  

    // Brand search
    await page.getByRole("button", { name: "Brand" }).click();
    await page.waitForLoadState("networkidle");
    searchText = "altra";
    await page
      .getByTestId("container-filters")
      .getByPlaceholder("Search your favorite brand...")
      .type(searchText, { delay: 100 });
    data = await page.getByTestId("brandSearchResults").allInnerTexts();
    splitData = data[1].split("\n").map((text) => text.trim());
    splitDataCount = splitData.filter(
      (text) => !text.toLowerCase().includes(searchText.toLowerCase())
    );
    expect(splitDataCount.length).toBe(0);
  });
}

import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

let currentURL; // Declare currentURL as a global variable

export default function createTest() {
  test("load product page", async ({ page }) => {
    await page.goto(url + "/collections/all");
    const links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allTextContents();
    console.log(links.find((item) => item.trim().length > 0));
    await page
      .getByText(`${links.find((item) => item.trim().length > 0)}`, {
        exact: true,
      })
      .click();

    expect(page.url()).toContain(url + "/products");
    currentURL = page.url();
    console.log("test1", currentURL);
  });

  test(" expect(page.url()).toContain(url + /products", async ({ page }) => {
    console.log("test2", currentURL);
    // expect(page.url()).toContain(url + "/products");
  });

  // test("add to cart", async ({ page }) => {});

  // test("go to checkout", async ({ page }) => {});
}

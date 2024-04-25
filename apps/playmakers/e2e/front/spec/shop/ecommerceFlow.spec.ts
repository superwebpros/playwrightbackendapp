import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

let currentURL:string; // Declare currentURL as a global variable

export default function createTest() {
  test("load product page", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.waitForLoadState(); // agregue esto como algo fundamental ya que los test fallan aveces por no esperar a que cargue la pagina
    const links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allTextContents();
    await page
      .getByText(`${links.find((item) => item.trim().length > 0)}`, {
        exact: true,
      })
      .click();

    expect(page.url()).toContain(url + "/products");
    currentURL = page.url();
  });

  test(" expect(page.url()).toContain(url + /products", async ({ page }) => {

    // expect(page.url()).toContain(url + "/products");
  });

  // test("add to cart", async ({ page }) => {});

  // test("go to checkout", async ({ page }) => {});
}

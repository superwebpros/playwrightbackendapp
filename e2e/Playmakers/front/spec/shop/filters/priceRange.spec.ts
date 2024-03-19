import { expect, test } from "playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("sale filtering", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.getByRole("button", { name: "Price Range" }).click();
    await page
      .getByTestId("container-filters")
      .getByTestId("saleFilter")
      .click();
    await page.waitForTimeout(2000);
    let links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allInnerTexts();
    let linksNames = links.filter((link) => link !== "" && !link.includes("+"));
    let saleTagsCount = await page.getByTestId("saleTag").count();
    await expect(linksNames.length).toBe(saleTagsCount);

    // take the filter and test if the product are not filtered
    await page
      .getByTestId("container-filters")
      .getByTestId("saleFilter")
      .click();
    await page.waitForTimeout(2000);
    links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allInnerTexts();
    linksNames = links.filter((link) => link !== "" && !link.includes("+"));
    saleTagsCount = await page.getByTestId("saleTag").count();
    await expect(linksNames.length).not.toBe(saleTagsCount);
  });

  test("regular filtering", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.getByRole("button", { name: "Price Range" }).click();
    await page
      .getByTestId("container-filters")
      .getByTestId("regularFilter")
      .click();
    await page.waitForTimeout(2000);
    let links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allInnerTexts();
    let linksNames = links.filter((link) => link !== "" && !link.includes("+"));
    let saleTagsCount = await page.getByTestId("saleTag").count();
    await expect(saleTagsCount).toBe(0);

    // take the filter and test if the product are not filtered
    await page
      .getByTestId("container-filters")
      .getByTestId("regularFilter")
      .click();
    await page.waitForTimeout(2000);
    links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allInnerTexts();
    linksNames = links.filter((link) => link !== "" && !link.includes("+"));
    saleTagsCount = await page.getByTestId("saleTag").count();
    await expect(saleTagsCount).not.toBe(0);
  });

  test("price range filtering", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.getByRole("button", { name: "Price Range" }).click();
    await page
      .getByTestId("container-filters")
      .getByPlaceholder("900")
      .fill("20");
    await page.getByRole("button", { name: "Go" }).click();
    await page.waitForTimeout(2000);
    let links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allInnerTexts();
    let linksNames = links.filter((link) => link !== "" && !link.includes("+"));

    const checkLastNumberGreaterThan = (array: string[]): boolean => {
      let result = false;
      const regex = /\d+\.\d+|\d+/g; // Expresión regular para encontrar números decimales o enteros
      array.forEach((str) => {
        const numbers: any = str.match(regex); // Busca todos los números en la cadena
        const lastNumber = parseFloat(numbers[numbers.length - 1]);
        const before: any = parseFloat(numbers[numbers.length - 2]);
        const lowest =
          before < lastNumber && before !== "NaN" ? before : lastNumber;
        if (lowest > 20) {
          result = true;
        }
      });
      return result;
    };
    const biggerThan = checkLastNumberGreaterThan(linksNames);
    await expect(biggerThan).toBe(false);
  });
}

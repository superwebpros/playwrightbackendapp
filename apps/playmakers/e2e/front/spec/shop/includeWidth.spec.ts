import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

const wides = ["Regular", "Wide", "Extra Wide", "Narrow"];
export default function createTest() {
  test("load product page", async ({ page }) => {
    await page.goto(url + "/collections/men/footwear");
    const titles = await page.getByTestId("title").allInnerTexts();
    const WithoutWide = titles.filter(
      (title) => !wides.some((wide) => title.includes(wide))
    );
    expect(WithoutWide).toEqual([]);
  });
}
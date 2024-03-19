import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("filtering only with selected brand", async ({ page }) => {
    await page.goto(url + "/collections/all");
    await page.getByRole("button", { name: "Brand" }).click();
    await page.getByRole("button", { name: "ASICS" }).click();
    await page.waitForTimeout(2000);

    let links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allInnerTexts();
    // console.log(links);
    let linksNames = links.filter(
      (link) => link !== "" && link.includes("ASICS")
    );
    const linksCount = links.filter(
      (link) => link !== "" && !link.includes("+")
    );
    await expect(linksCount.length).toBe(linksNames.length);
  });
}

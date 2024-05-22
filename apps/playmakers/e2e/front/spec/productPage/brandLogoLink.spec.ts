import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";
import branNameFormat from "../../../../helpers/brandNameFormat";

export default function createTest() {
  test("click on brand logo in product page redirect to collection brand", async ({
    page,
  }) => {
    await page.goto(url + "/collections/all", { waitUntil: "networkidle" });
    await page.getByTestId("hit").first().click();
    await page.waitForLoadState("networkidle");
    const brandName: any = await page
      .getByTestId("brandLink")
      .getAttribute("alt");
    await page.getByTestId("brandLink").click();
    await page.waitForLoadState("networkidle");

    expect(page.url()).toContain(
      url + "/collections/" + branNameFormat(brandName)
    );
    expect(page.url()).not.toContain(
      url + "/collections/" + "all?q=" + brandName
    );
  });
}

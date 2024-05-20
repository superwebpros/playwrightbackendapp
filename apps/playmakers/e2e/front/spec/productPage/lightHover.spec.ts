import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("hover happens", async ({ page }) => {
    await page.goto(`${url}/collections/all`);
    await page.waitForLoadState('networkidle')
    const hits = await page.getByTestId("hit").allTextContents();

    // Find the first element with "+" in its text content
    const firstHitWithOptions = hits.find((hit) => hit.includes("+"));

    // Ensure that the element to be clicked is properly awaited
    await page
      .getByTestId("hit")
      .filter({ hasText: firstHitWithOptions }).first()
      .click();

    // Fetch the bounding box before hover
    const secondImgElement:any = await page.getByTestId("secondImg").first();
    const sizeBeforeHover:any = await secondImgElement.boundingBox();

    // Perform hover and then fetch the bounding box after hover
    await secondImgElement.hover({ force: true, noWaitAfter: false });
    await page.waitForLoadState("networkidle");
    const sizeAfterHover = await secondImgElement.boundingBox();
    expect(sizeAfterHover?.width > sizeBeforeHover?.width).toBeTruthy();
  });
}

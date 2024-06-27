import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("hover happens", async ({ page }) => {
    await page.goto(`${url}/products/cielo-x-2-md?Color=Ceramic+%2F+Evening+Primrose+%28CEPR%29&Size=6&Width=D`);
    await page.waitForLoadState('networkidle')
    const secondImgElement:any = await page.getByTestId("secondImg").first();
    const sizeBeforeHover:any = await secondImgElement.boundingBox();
    // Perform hover and then fetch the bounding box after hover
    await secondImgElement.hover({ force: true, noWaitAfter: false });
    await page.waitForTimeout(1000);
    await page.waitForLoadState("networkidle");
    const sizeAfterHover = await secondImgElement.boundingBox();
    // console.log(sizeBeforeHover, sizeAfterHover)
    expect(sizeAfterHover?.width > sizeBeforeHover?.width).toBeTruthy();
    await page.close();
  });
}

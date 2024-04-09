import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

interface BoundingBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function createTest() {
  test("Hover make icons bigger", async ({ page }) => {
    await page.goto(url);
    await page.waitForLoadState();
    let favoriteIcon = await page.getByTestId("favoriteIcon");
    await expect(favoriteIcon).toBeVisible();
    let boundingBox: BoundingBox | Promise<BoundingBox> | null =
      await favoriteIcon.boundingBox();
    let iconWidth: number | null = boundingBox ? boundingBox.width : null;
    await favoriteIcon.hover();
    let newBoundingBox: BoundingBox | Promise<BoundingBox> | null =
      await favoriteIcon.boundingBox();
    let newIconWidth = newBoundingBox ? newBoundingBox.width : null;

    if (iconWidth && newIconWidth) {
      expect(newIconWidth).toBeGreaterThan(iconWidth);
    } else {
      throw new Error("Icon width is null");
    }

    let acountIcon = await page.getByTestId("accountButtonInactive");
    await expect(acountIcon).toBeVisible();
    boundingBox = await acountIcon.boundingBox();
    iconWidth = boundingBox ? boundingBox.width : null;
    await acountIcon.hover();
    newBoundingBox = await acountIcon.boundingBox();
    newIconWidth = newBoundingBox ? newBoundingBox.width : null;

    if (iconWidth && newIconWidth) {
      expect(newIconWidth).toBeGreaterThan(iconWidth);
    } else {
      throw new Error("Icon width is null");
    }
  });
}

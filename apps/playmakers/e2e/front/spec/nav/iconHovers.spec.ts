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
    await page.goto(url, { waitUntil: "networkidle" });

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
    let boundingBox2 = await acountIcon.boundingBox();
    let iconWidth2 = boundingBox2 ? boundingBox2.width : null;
    await acountIcon.hover({ force: true, noWaitAfter: false });
    await page.waitForLoadState("networkidle");
    let newBoundingBox2 = await acountIcon.boundingBox();
    let newIconWidth2 = newBoundingBox2 ? newBoundingBox2.width : null;
    if (iconWidth2 && newIconWidth2) {
      expect(newIconWidth2).toBeGreaterThan(iconWidth2);
    } else {
      throw new Error("Icon width is null");
    }
  });
}

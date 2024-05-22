import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("tags only with kids", async ({ page }) => {
    await page.goto(url + "/collections/all", { waitUntil: "networkidle" });

    await page.getByRole("button", { name: "Gender" }).click();
    await page.getByRole("button", { name: "Big Kids", exact: true }).click();
    await page.waitForLoadState("networkidle");
    const hits = await page.getByTestId("hit").allTextContents();
    // todos los hits deben incluir la palabra kids, algunos hits pueden contener varias tags
    for (const hit of hits) {
      // evito el texto de las opciones de colores
      if (hit !== "" && hit.length > 5) expect(hit).toContain("Big Kids");
    }
  });
}

import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";

export default function createTest() {
  test("sort by newest to older correctly", async ({ page }) => {
    await page.goto(url + "/collections/all", { waitUntil: "networkidle" });
    
    // Busca los textos de las opciones dentro de shopContainer
    const sorterData = await page
      .getByTestId("shopContainer")
      .locator(".ais-SortBy-option")
      .allInnerTexts();
    
    // Busca el texto de la opción seleccionada
    const selectedElement = await page
      .getByTestId("shopContainer")
      .locator(".ais-SortBy-option[selected]").first()
      .innerText();
    
    console.log(`Selected element: ${selectedElement}`);
    await expect(selectedElement).toContain("Newest to Oldest");
    await page.close();
  });
}

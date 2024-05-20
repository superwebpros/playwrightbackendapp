import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

// Exporta una función que crea y ejecuta una prueba con Playwright
export default function createTest() {
  test("women gender was filtered", async ({ page }) => {
    // Navega a la URL especificada y espera hasta que la navegación se haya confirmado
    await page.goto(url + "/collections/all", { waitUntil: "commit" });

    // Verifica que los elementos del filtro de género sean visibles
    await expect(page.getByTestId("container-filters")).toBeVisible();
    await expect(page.getByRole("button", { name: "Gender" })).toBeVisible();

    // Prueba el filtrado por género masculino
    await page.getByRole("button", { name: "Gender" }).click();
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: "Men", exact: true }).click();
    await page.waitForLoadState("networkidle");
    await page.waitForURL(url + "/collections/all?shopify_products%5BrefinementList%5D%5Bcollection_ids%5D%5B0%5D=150471442485");

    // Obtiene todos los enlaces de los resultados infinitos
    let links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allTextContents();

    // Filtra los enlaces que contienen "Women's" y verifica que no haya ninguno
    let linksNames = links.filter((link) => link.includes("Women's"));
    await expect(linksNames.length).toBe(0);

    // Prueba el filtrado por género femenino
    await page.getByRole("button", { name: "Men", exact: true }).click();
    await page.waitForLoadState("networkidle");
    await page.getByRole("button", { name: "Women", exact: true }).click();
    await page.waitForLoadState("networkidle");
    await page.waitForSelector(".ais-InfiniteHits-list");
    await page.waitForURL(url + "/collections/all?shopify_products%5BrefinementList%5D%5Bcollection_ids%5D%5B0%5D=150470656053");

    // Obtiene todos los enlaces de los resultados infinitos nuevamente
    links = await page
      .getByTestId("infiniteHits")
      .locator(".ais-InfiniteHits")
      .locator(".ais-InfiniteHits-list")
      .getByRole("link")
      .allTextContents();

    // Filtra los enlaces que contienen "Men's" y verifica que no haya ninguno
    linksNames = links.filter((link) => link.includes("Men's"));
    console.log(linksNames);
    await expect(linksNames.length).toBe(0);
  });
}

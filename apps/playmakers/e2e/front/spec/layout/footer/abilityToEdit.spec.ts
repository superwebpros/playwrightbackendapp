import { test, expect } from "@playwright/test";
import url from "../../../../config/frontUrl";

export default function createTest() {
  test("navigate from footer when are on shop", async ({ page }) => {
    await page.goto(url, { waitUntil: "networkidle" });

    const copyright = await page.getByTestId("flowbite-footer-copyright");
    await expect(copyright).toBeVisible();
    const copyrightText = await copyright.innerText();
    console.log(copyrightText);

    // open a new page
    const newPage = await page.context().newPage();
    await newPage.goto(
      "https://growing-moonlight-c9cb750c3b.strapiapp.com/admin/auth/login"
    );
    await newPage.getByPlaceholder("e.g. kai@doe.com").click();
    await newPage
      .getByPlaceholder("e.g. kai@doe.com")
      .fill("hello@superwebpros.com");
    await newPage.getByLabel("Password*").click();
    await newPage.waitForLoadState("networkidle");
    await newPage.getByLabel("Password*").fill("#Ak#..A<4ymW;e}@~)");
    await newPage.getByRole("button", { name: "Login" }).click();
    await newPage.waitForLoadState("networkidle");
    await newPage.getByRole("link", { name: "Content Manager" }).click();
    await newPage.waitForLoadState("networkidle");
    await newPage.getByRole("link", { name: "Layout" }).click();
    await newPage.waitForLoadState("networkidle");
    await newPage.getByText("Published").click();
    await newPage.waitForLoadState("networkidle");
    await newPage.getByLabel("CopyrightTitle").dblclick();
    await newPage.waitForLoadState("networkidle");
    await newPage.getByLabel("CopyrightTitle").type("Hello World");
    // await newPage.waitForTimeout(10000);
    await newPage.getByRole("button", { name: "Save" }).click();
    await newPage.waitForLoadState("networkidle");

    // come back to the original page
    await page.reload();
    await page.waitForLoadState("networkidle");

    const copyrightAfter = await page.getByTestId("flowbite-footer-copyright");
    const copyrightTextAfter = await copyrightAfter.innerText();
    console.log(copyrightTextAfter);
    await expect(copyrightTextAfter).not.toEqual(copyrightText);

    // if is successful, then I will change it back
    await newPage.getByLabel("CopyrightTitle").dblclick();
    await newPage.waitForLoadState("networkidle");
    await newPage.getByLabel("CopyrightTitle").fill("Playmakers");
    await newPage.getByRole("button", { name: "Save" }).click();
    await newPage.waitForLoadState("networkidle");
    await page.reload();
    await page.waitForLoadState("networkidle");
    const copyrightAfter2 = await page.getByTestId("flowbite-footer-copyright");
    const copyrightTextAfter2 = await copyrightAfter2.innerText();
    await expect(copyrightTextAfter2).toEqual(copyrightText);
  });
}

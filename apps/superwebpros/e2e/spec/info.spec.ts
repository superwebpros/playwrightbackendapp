import { test, expect } from "@playwright/test";
import fs from "fs";

export default function createTest() {
  test("home", async ({ page, request }) => {
    await page.goto("https://www.superwebpros.com/");
    // get info from the page
    const title = await page.title();
    const url = page.url();

    const info = await page.on("console", (msg) => console.log(msg.text()));
    // console.log(info);

    const headers = await page.accessibility.snapshot();
    // console.log(headers);

    const content = await page.innerText("h2");
    // console.log(content);

    const buffer = await page.screenshot();
    fs.writeFileSync("imagen.png", buffer);
  });
}

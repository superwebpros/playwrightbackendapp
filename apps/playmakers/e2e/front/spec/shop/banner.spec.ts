import { test, expect } from "@playwright/test";
import url from "../../../config/frontUrl";
import exp from "constants";

export default function createTest() {
  test("dinamic banner", async ({ page }) => {
    // take banner for collections all
    await page.goto(url + "/collections/all", { waitUntil: "commit" });

    const image = await page.getByTestId("shopHeroImage").all();
    const imageProperties = await image[0].getAttribute("src");

    // take banner for collections men
    await page.goto(url + "/collections/men", { waitUntil: "commit" });

    const image2 = await page.getByTestId("shopHeroImage").all();
    const imageProperties2 = await image2[0].getAttribute("src");
    expect(imageProperties).not.toEqual(imageProperties2);

    // take banner for collections women
    await page.goto(url + "/collections/women", { waitUntil: "commit" });

    const image3 = await page.getByTestId("shopHeroImage").all();
    const imageProperties3 = await image3[0].getAttribute("src");
    expect(imageProperties2).not.toEqual(imageProperties3);

    // take banner for collections kids
    await page.goto(url + "/collections/kids", { waitUntil: "commit" });

    const image4 = await page.getByTestId("shopHeroImage").all();
    const imageProperties4 = await image4[0].getAttribute("src");
    expect(imageProperties3).not.toEqual(imageProperties4);

    // to se the images
    // console.log("=> imageProperties:", imageProperties);
    // console.log("=> imageProperties2:", imageProperties2);
    // console.log("=> imageProperties3:", imageProperties3);
    // console.log("=> imageProperties4:", imageProperties4);
  });
}

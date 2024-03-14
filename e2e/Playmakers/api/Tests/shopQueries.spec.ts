import { test, expect } from "@playwright/test";
import url from "../../config/strapiUrl";

export default function createTest() {
  test("shop", async ({ request }) => {
    const response = await request.get(url + "/api/shop");
    await expect(response).toBeOK();
  });
}

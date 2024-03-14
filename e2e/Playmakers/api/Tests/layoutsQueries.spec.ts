import { test, expect } from "@playwright/test";
import url from "../../config/strapiUrl";

export default function createTest() {
  test("layouts", async ({ request }) => {
    const response = await request.get(url + "/api/layouts");
    await expect(response).toBeOK();
  });
}

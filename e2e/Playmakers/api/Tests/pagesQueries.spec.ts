import { test, expect } from "@playwright/test";
import url from "../../config/strapiUrl";

export default function createTest() {
  test("pages", async ({ request }) => {
    const response = await request.get(url + "/api/pages");
    await expect(response).toBeOK();
  });
}

import { test, expect } from "@playwright/test";
import url from "../../config/strapiUrl";

export default function createTest() {
  test("resources", async ({ request }) => {
    const response = await request.get(url + "/api/resources");
    await expect(response).toBeOK();
  });
}

import { test, expect } from "@playwright/test";
import url from "../../config/strapiUrl";

export default function createTest() {
  test("GET", async ({ request }) => {
    const response = await request.get(url + "/api/users");
    await expect(response).not.toBeOK();
  });
}

import { test, expect } from "@playwright/test";
import url from "../../config/strapiUrl";

export default function createTest() {
  test("race-results", async ({ request }) => {
    const response = await request.get(url + "/api/race-results");
    await expect(response).toBeOK();
  });
}

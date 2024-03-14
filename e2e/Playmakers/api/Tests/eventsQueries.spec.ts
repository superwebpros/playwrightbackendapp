import { test, expect } from "@playwright/test";
import url from "../../config/strapiUrl";

export default function createTest() {
  test("events", async ({ request }) => {
    const response = await request.get(url + "/api/events");
    await expect(response).toBeOK();
  });
}

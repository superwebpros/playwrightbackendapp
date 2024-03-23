import { test, expect } from "@playwright/test";
import url from "../../config/strapiUrl";

export default function createTest() {
  test("GET", async ({ request }) => {
    const response = await request.get(url + "/api/article-posts");
    // const bodyJson = await response.json();
    // console.log(bodyJson);
    await expect(response).toBeOK();
  });
}

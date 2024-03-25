import { test, expect } from "@playwright/test";
import * as t from "./spec/index.ts";

export default (function () {
  test.describe("home", t.home);
})();

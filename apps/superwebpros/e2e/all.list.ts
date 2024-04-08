import { test, expect } from "@playwright/test";
import * as t from "./spec/index";

export default (function () {
  test.describe("home", t.home);
  test.describe("info", t.info);
})();

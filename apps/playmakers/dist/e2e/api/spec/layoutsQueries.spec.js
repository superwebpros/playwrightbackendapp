"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const strapiUrl_1 = __importDefault(require("../../config/strapiUrl"));
function createTest() {
    (0, test_1.test)("GET", async ({ request }) => {
        const response = await request.get(strapiUrl_1.default + "/api/layouts");
        await (0, test_1.expect)(response).toBeOK();
    });
}
exports.default = createTest;

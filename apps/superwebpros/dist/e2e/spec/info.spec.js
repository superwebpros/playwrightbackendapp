"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const fs_1 = __importDefault(require("fs"));
function createTest() {
    (0, test_1.test)("home", async ({ page, request }) => {
        await page.goto("https://www.superwebpros.com/");
        // get info from the page
        const title = await page.title();
        const url = page.url();
        const info = await page.on("console", (msg) => console.log(msg.text()));
        // console.log(info);
        const headers = await page.accessibility.snapshot();
        // console.log(headers);
        const content = await page.innerText("h2");
        // console.log(content);
        const buffer = await page.screenshot();
        fs_1.default.writeFileSync("imagen.png", buffer);
    });
}
exports.default = createTest;

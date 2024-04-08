"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const fs_1 = __importDefault(require("fs"));
function createTest() {
    (0, test_1.test)("home", (_a) => __awaiter(this, [_a], void 0, function* ({ page, request }) {
        yield page.goto("https://www.superwebpros.com/");
        // get info from the page
        const title = yield page.title();
        const url = page.url();
        const info = yield page.on("console", (msg) => console.log(msg.text()));
        // console.log(info);
        const headers = yield page.accessibility.snapshot();
        // console.log(headers);
        const content = yield page.innerText("h2");
        // console.log(content);
        const buffer = yield page.screenshot();
        fs_1.default.writeFileSync("imagen.png", buffer);
    }));
}
exports.default = createTest;

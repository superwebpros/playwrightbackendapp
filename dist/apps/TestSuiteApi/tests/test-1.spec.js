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
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
(0, test_1.test)('test', ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
    yield page.goto('https://www.google.com/');
    yield page.getByLabel('Buscar', { exact: true }).click();
    yield page.getByLabel('Buscar', { exact: true }).fill('facebook');
    yield page.getByRole('link', { name: 'Facebook - Inicia sesión o' }).click();
    yield page.goto('https://www.google.com/search?q=facebook&sca_esv=6917f8fced87079d&source=hp&ei=n5jfZeHYHNzU1sQP-eeaiAE&iflsig=ANes7DEAAAAAZd-mrzKX8qiwKuMe2NiKd4ze3WsO1sP5&ved=0ahUKEwihpN308M6EAxVcqpUCHfmzBhEQ4dUDCA0&uact=5&oq=facebook&gs_lp=Egdnd3Mtd2l6IghmYWNlYm9vazIUEC4YgAQYsQMYgwEYyQMYxwEY0QMyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATIOEAAYgAQYigUYsQMYgwEyCxAAGIAEGLEDGIMBMgsQABiABBiKBRiSAzILEAAYgAQYsQMYgwFI1RdQ8g5YkhZwAXgAkAEAmAFRoAHrBKoBATi4AQPIAQD4AQGYAgmgAo8FqAIKwgIQEAAYAxiPARjlAhjqAhiMA8ICEBAuGAMYjwEY5QIY6gIYjAPCAhEQLhiABBixAxiDARjHARjRA8ICCBAAGIAEGLEDwgIOEC4YgAQYsQMYxwEY0QPCAgUQABiABMICDhAuGIAEGIoFGLEDGIMBwgILEC4YgAQYsQMYgwGYAwaSBwE5&sclient=gws-wiz');
    yield page.getByRole('combobox', { name: 'Buscar' }).click({
        clickCount: 3
    });
    yield page.goto('https://savat.ar/');
}));

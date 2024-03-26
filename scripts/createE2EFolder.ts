import fs from "fs";
import path from "path";

// Directorio de la carpeta e2e
const e2eFolder = path.join(__dirname, "e2e");

// Crear la carpeta e2e si no existe
if (!fs.existsSync(e2eFolder)) {
  fs.mkdirSync(e2eFolder);
}

// Ruta del archivo index.js dentro de la carpeta e2e
const indexPath = path.join(e2eFolder, "imports.list.ts");

// Crear el archivo index.js si no existe
if (!fs.existsSync(indexPath)) {
  fs.writeFileSync(
    indexPath,
    `
    // sellect the project you want to test
    import { playmakers } from "@superwebpros/testsuite";
    import { test, expect } from "@playwright/test";
    // run the test
    test.describe("Imports", playmakers);`
  );
}

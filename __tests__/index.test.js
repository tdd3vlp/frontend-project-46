import { dirname } from "path";
import * as path from "node:path";
import { fileURLToPath } from "url";
import gendiff from "../src/index.js";
import { describe, expect, test } from "@jest/globals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const result = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

describe("Compare module", () => {
  test("Compare two JSON files", () => {
    expect(
      gendiff(
        path.join(__dirname, "..", "__fixtures__", "file1.json"),
        path.join(__dirname, "..", "__fixtures__", "file2.json"),
      ),
    ).toEqual(result);
  });
});

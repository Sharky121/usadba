// Оптимизация картинок в public/images: уменьшение до MAX px по длинной стороне,
// JPEG — mozjpeg (progressive), PNG — сжатие без потерь. Файл заменяется, только если стал меньше,
// пути не меняются. Запуск: npm run optimize:images [-- папка]
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DIR = process.argv[2] || "public/images";
const MAX = 2000;
const JPEG_QUALITY = 78;

let before = 0;
let after = 0;
let changed = 0;

for (const name of await fs.readdir(DIR)) {
  const file = path.join(DIR, name);
  const ext = path.extname(name).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

  const input = await fs.readFile(file);
  before += input.length;

  let img = sharp(input, { failOn: "none" }).rotate().resize({
    width: MAX,
    height: MAX,
    fit: "inside",
    withoutEnlargement: true,
  });
  img = ext === ".png"
    ? img.png({ compressionLevel: 9, effort: 10 })
    : img.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true });

  const output = await img.toBuffer();
  if (output.length < input.length * 0.97) {
    await fs.writeFile(file, output);
    after += output.length;
    changed++;
  } else {
    after += input.length;
  }
}

const mb = (n) => (n / 1024 / 1024).toFixed(1);
console.log(`${DIR}: ${mb(before)} МБ → ${mb(after)} МБ, пережато файлов: ${changed}`);

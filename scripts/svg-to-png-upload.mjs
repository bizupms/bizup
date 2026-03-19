#!/usr/bin/env node
/**
 * Convert SVG icons to PNG and upload to R2 via wrangler
 */
import sharp from "sharp";
import { readFileSync, readdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ICON_DIR = join(__dirname, "..", "temp-icons");
const R2_BUCKET = "bizup-r2";
const R2_PREFIX = "email/icons";

async function main() {
  const files = readdirSync(ICON_DIR).filter((f) => f.endsWith(".svg"));

  for (const file of files) {
    const name = file.replace(".svg", "");
    const svgBuffer = readFileSync(join(ICON_DIR, file));

    // Convert SVG to PNG (32x32)
    const pngBuffer = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
    const pngPath = join(ICON_DIR, `${name}.png`);
    writeFileSync(pngPath, pngBuffer);
    console.log(`Converted: ${name}.png (${pngBuffer.length} bytes)`);
  }

  // Upload all PNGs via wrangler
  const pngFiles = readdirSync(ICON_DIR).filter((f) => f.endsWith(".png"));
  for (const file of pngFiles) {
    const r2Key = `${R2_PREFIX}/${file}`;
    const filePath = join(ICON_DIR, file);
    try {
      execSync(
        `npx wrangler r2 object put "${R2_BUCKET}/${r2Key}" --file "${filePath}" --content-type "image/png"`,
        { cwd: join(__dirname, ".."), stdio: "pipe" }
      );
      console.log(`Uploaded: ${r2Key}`);
    } catch (err) {
      console.error(`Failed: ${r2Key} - ${err.stderr?.toString()}`);
    }
  }

  console.log("\nDone! Icons available at:");
  console.log(`/r2/${R2_PREFIX}/`);
}

main().catch(console.error);

import sharp from "sharp";
import { glob } from "glob";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const assetsRoot = path.join(projectRoot, "src", "assets");

/**
 * Decide quality settings based on SEO/UX importance.
 */
function getWebpOptions(filePath) {
  const rel = path.relative(assetsRoot, filePath).replace(/\\/g, "/");

  if (rel === "hero-water.jpg" || rel === "services bg.jpg") {
    // Hero / above-the-fold backgrounds
    return { quality: 85, lossless: false };
  }

  if (rel === "logo.jpeg") {
    // Logo / brand icon: crisp edges
    return { lossless: true }; // sharp ignores quality when lossless
  }

  // Regular content images
  return { quality: 78, lossless: false };
}

async function convertOne(filePath) {
  const ext = path.extname(filePath);
  const outPath = filePath.slice(0, -ext.length) + ".webp";

  const options = getWebpOptions(filePath);

  try {
    await sharp(filePath)
      .webp(options)
      .toFile(outPath);

    console.log(`Converted -> ${path.relative(projectRoot, outPath)}`);
  } catch (err) {
    console.error(`Failed to convert ${filePath}:`, err.message || err);
  }
}

async function main() {
  // Use forward-slash patterns so glob matches correctly on Windows.
  const patterns = [
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.png",
  ];

  const files = (
    await Promise.all(
      patterns.map((pattern) =>
        glob(pattern, { cwd: assetsRoot, nodir: true }).then((matches) =>
          matches.map((m) => path.join(assetsRoot, m)),
        ),
      ),
    )
  ).flat();

  if (!files.length) {
    console.log("No JPG/PNG images found under src/assets.");
    return;
  }

  console.log(`Found ${files.length} images. Converting to WebP...`);

  for (const file of files) {
    await convertOne(file);
  }

  console.log("WebP conversion complete.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

import fs from "node:fs";
import path from "node:path";

const ROOT = "src/content";

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : full;
  });
}

const files = walk(ROOT).filter((file) => file.endsWith(".md"));

const captionRegex =
  /\[caption[^\]]*\]\s*((?:<a\b[^>]*>\s*)?<img\b[^>]*\/?>\s*(?:<\/a>)?)\s*([\s\S]*?)\s*\[\/caption\]/g;

for (const file of files) {
  const original = fs.readFileSync(file, "utf8");

  const updated = original.replace(captionRegex, (_, media, caption) => {
    const cleanMedia = media
      .replace(/\sclass="[^"]*"/g, "")
      .replace(/\stitle="[^"]*"/g, "")
      .replace(/\sstyle="[^"]*"/g, "")
      .replace(/<img\b([^>]*?)\s*\/?>/g, "<img$1 />")
      .trim();

    const cleanCaption = caption
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();

    return `<figure class="wp-caption">
  ${cleanMedia}
  <figcaption>${cleanCaption}</figcaption>
</figure>`;
  });

  if (updated !== original) {
    fs.writeFileSync(file, updated, "utf8");
    console.log(`converted: ${file}`);
  }
}
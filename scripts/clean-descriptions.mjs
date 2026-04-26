import fs from "node:fs";
import path from "node:path";

const ROOT = "src/content";

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : full;
  });
}

const files = walk(ROOT).filter((f) => f.endsWith(".md"));

for (const file of files) {
  const content = fs.readFileSync(file, "utf8");

  const updated = content.replace(/^description:\s*"((?:\\"|[^"])*)"/gm, (_, desc) => {
    let cleaned = desc
      .replace(/\[caption[^\]]*\][\s\S]*?\[\/caption\]/g, "")
      .replace(/\s*\[caption.*$/g, "")
      .replace(/\[toc\]/gi, "")
      .replace(/\s+/g, " ")
      .trim();

    return `description: "${cleaned}"`;
  });

  if (updated !== content) {
    fs.writeFileSync(file, updated, "utf8");
    console.log(`cleaned: ${file}`);
  }
}
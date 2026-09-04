const fs = require('fs');
const path = require('path');

const sourceDir = path.resolve(__dirname, './dist/circuit-buddy/browser');
const destDir = path.resolve(__dirname, './docs');

// Files that live in docs/ but are not produced by the build. GitHub Pages needs
// these to survive the clean, so they are never deleted.
const PRESERVE = new Set(['CNAME', '.nojekyll', '.git']);

function copyRecursive(src, dest) {
  const stats = fs.statSync(src);

  if (stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const file of fs.readdirSync(src)) {
      copyRecursive(path.join(src, file), path.join(dest, file));
    }
    return;
  }

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function cleanDest() {
  if (!fs.existsSync(destDir)) return;

  for (const entry of fs.readdirSync(destDir)) {
    if (PRESERVE.has(entry)) continue;
    fs.rmSync(path.join(destDir, entry), { recursive: true, force: true });
  }
}

cleanDest();
copyRecursive(sourceDir, destDir);

console.log('build/browser copied to docs successfully');

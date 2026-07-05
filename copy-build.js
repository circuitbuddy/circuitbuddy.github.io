const fs = require('fs');
const path = require('path');

const sourceDir = path.resolve(__dirname, './dist/circuit-buddy/browser');
const destDir = path.resolve(__dirname, './docs');

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

copyRecursive(sourceDir, destDir);

console.log('build/browser copied to docs successfully');

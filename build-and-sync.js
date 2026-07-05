const { spawn } = require('child_process');
const path = require('path');

const copyScript = path.resolve(__dirname, './copy-build.js');

console.log('🔨 Starting Angular build...');

const ng = spawn('npx', ['ng', 'build', '--configuration production'], {
  stdio: 'inherit',
  shell: true,
});

ng.on('close', (code) => {
  if (code !== 0) {
    console.error(`❌ Build failed with exit code ${code}`);
    process.exit(code);
  }
  console.log('✅ Build complete → running copy script...');
  require('child_process').execSync(`node ${copyScript}`, { stdio: 'inherit' });
  console.log('✅ Copy complete.');
});

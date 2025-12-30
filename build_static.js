const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const sourceFile = path.join(__dirname, 'pixel-movies.html');
const destFile = path.join(distDir, 'index.html');

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

fs.copyFileSync(sourceFile, destFile);
console.log('Build complete: pixel-movies.html -> dist/index.html');

const fs = require("fs-extra");
const path = require("path");

const srcDir = path.resolve(__dirname, "dist/login-ang-lib/assets");
const destDir = path.resolve(__dirname, "src/assets/login-ang-lib");

fs.ensureDirSync(destDir);
fs.copySync(srcDir, destDir, { overwrite: true });

console.log("✅ Library assets copied to src/assets/login-ang-lib");

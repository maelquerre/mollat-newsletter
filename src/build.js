const fs = require("fs");
const fse = require("fs-extra");
const path = require("path");

/* Create the build directory */
const buildPath = path.join(__dirname, "../build");

if (!fs.existsSync(buildPath)) {
  fs.mkdirSync(buildPath);
}

/* Copy assets directory to build directory */
const assetsDirectoryPath = path.join(__dirname, "assets");

fse.copySync(assetsDirectoryPath, buildPath, { override: true }, (err) => {
  if (err) {
    console.error("Error while copying assets directory on build");
  }
});

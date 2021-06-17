const fse = require("fs-extra");
const path = require("path");

/* Create the build directory */
const buildPath = path.join(__dirname, "../build");

if (!fse.existsSync(buildPath)) {
  fse.mkdirSync(buildPath);
}

/* Copy assets directory to build directory */
const assetsDirectoryPath = path.join(__dirname, "assets");
const buildAssetsDirectoryPath = path.join(__dirname, "../build/assets");

fse.copySync(
  assetsDirectoryPath,
  buildAssetsDirectoryPath,
  { override: true },
  (err) => {
    if (err) {
      console.error("Error while copying assets directory on build");
    }
  }
);

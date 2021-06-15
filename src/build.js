const fs = require('fs')
const path = require('path')

const buildPath = path.join(__dirname, '../build')

if (!fs.existsSync(buildPath)) {
  fs.mkdirSync(buildPath)
}

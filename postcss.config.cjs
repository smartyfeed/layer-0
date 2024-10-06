const easyImport = require('postcss-easy-import');
const nestedProps = require('postcss-nested-props');
const simpleVars = require('postcss-simple-vars');
const presetEnv = require('postcss-preset-env')({
  stage: 0,
  features: {
    "nesting-rules": true,
  },
});

const globalData = require("@csstools/postcss-global-data")({
  files: ["./src/styles/global.pcss"],
});

module.exports = {
  plugins: [
    globalData,
    easyImport,
    nestedProps,
    simpleVars,
    presetEnv
  ]
}
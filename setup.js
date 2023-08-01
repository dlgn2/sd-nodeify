const fs = require('fs');
const path = require('path');

const packageJsonPath = path.resolve('./package.json');
const babelConfigPath = path.resolve('./babel.config.js');
const metroConfigPath = path.resolve('./metro-config.js');

// Load the existing package.json
const packageJson = require(packageJsonPath);

// Append or update the "@ethersproject/shims" dependency to the user's package.json
packageJson.dependencies = packageJson.dependencies || {};
packageJson.dependencies['@ethersproject/shims'] = '^5.7.0';

// Write the updated package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');

// Append or update the "@babel/plugin-syntax-import-assertions" plugin to the user's babel.config.js
const babelConfigContent = `
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['@babel/plugin-syntax-import-assertions'],
};
`;
fs.writeFileSync(babelConfigPath, babelConfigContent, 'utf8');

// Modify the metro-config.js file here
const metroConfigContent = `
const path = require('path');

const extraNodeModules = {
  stream: require.resolve('stream-browserify'),
  crypto: require.resolve('react-native-crypto'),
  zlib: require.resolve('browserify-zlib'),
  argon2: require.resolve('react-native-argon2'),
};

const nodeModulesPaths = [path.resolve(path.join(__dirname, './node_modules'))];

module.exports = {
  resolver: {
    extraNodeModules,
  },
  // Other configurations...
};
`;
fs.writeFileSync(metroConfigPath, metroConfigContent, 'utf8');

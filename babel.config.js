// eslint-disable-next-line no-undef
module.exports = function (api) {
  api.cache(true);
  process.env.EXPO_ROUTER_APP_ROOT = './src/app';
  return {
    presets: [['babel-preset-expo']],
    plugins: ['nativewind/babel', ['inline-import', { extensions: ['.sql'] }]],
  };
};

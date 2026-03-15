module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for react-native-reanimated
      // This must always be listed LAST in the plugins array
      'react-native-reanimated/plugin', 
    ],
  };
};
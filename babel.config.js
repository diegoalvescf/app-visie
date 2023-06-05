module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.jsx',
            '.js',
            '.json',
            '.svg',
            '.png',
            '.Svg',
            '.Png',
          ],
          alias: {
            '@assets': './src/assets',
            '@hooks': './src/common/hooks',
            '@theme': './src/common/theme',
            '@utils': './src/common/utils',
            '@domain': './src/domain',
            '@infra': './src/infra',
            '@routes': './src/infra/config/routes',
            '@screens': './src/presentation/screens',
            '@components': './src/presentation/components',
          },
        },
      ],
    ],
  };
};

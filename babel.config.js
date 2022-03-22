module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@/components': './src/components',
            '@/templates': './src/templates',
            '@/screens': './src/screens',
            '@/logics': './src/logics',
            '@/constants': './src/constants',
            '@/assets': './assets',
            '@/routes': './src/routes',
          },
        },
      ],
    ],
  };
};

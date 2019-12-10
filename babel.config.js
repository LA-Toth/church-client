const getPresets = envOptions => ['@babel/preset-react', '@babel/preset-typescript', ['@babel/preset-env', envOptions]]

const getPlugins = () => ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-class-properties']

// eslint-disable-next-line immutable/no-mutation
module.exports = {
  presets: getPresets({
    loose: true,
    modules: false,
    targets: {
      node: 'current',
    },
    useBuiltIns: 'entry',
    corejs: 'core-js@3',
  }),
  plugins: getPlugins(),
  env: {
    test: {
      presets: getPresets({
        loose: true,
        modules: 'commonjs',
        targets: {
          node: 'current',
        },
        useBuiltIns: 'entry',
        corejs: 'core-js@3',
      }),
      plugins: getPlugins(),
    },
  },
}

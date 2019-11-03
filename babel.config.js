module.exports = api => {
  return (api.env('test')) ? {
    presets: [
      ["@babel/env",{
        targets: { node: 'current' }
      }],
      ["@babel/typescript", {
        isTSX: true,
        allExtensions: true,
      }],
    ],
    plugins: [
      './asset/babel-plugin-rewire/babel-plugin-rewire.js',
      '@babel/plugin-transform-runtime',
    ]
  } : {
    presets: [
      ["@babel/env",{
        targets: { node: 'current' }
      }],
      ["@babel/typescript", {
        isTSX: true,
        allExtensions: true,
      }],
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
    ]
  }
}


module.exports = api => {
  return (api.env('test')) ? {
    presets: [
      ["@babel/env",{
        targets: '> 0.25%, not dead',
      }],
      ["@babel/typescript", {
        isTSX: true,
        allExtensions: true,
      }],
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
    ]
  } : {
    presets: [
      ["@babel/env",{
        targets: '> 0.25%, not dead',
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


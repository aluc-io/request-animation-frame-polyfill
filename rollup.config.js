import typescript from '@rollup/plugin-typescript'
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'es',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'request-animation-frame-polyfill',
      plugins: [
        getBabelOutputPlugin({
          allowAllFormats: true,
          presets: [['@babel/preset-env', {
            modules: 'umd',
            targets: '> 0.25%, not dead',
          }]],
        }),
      ]
    },
  ],
  plugins: [typescript()],
};

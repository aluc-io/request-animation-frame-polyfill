import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/request-animation-frame-polyfill.esm.js',
      format: 'es',
    },
    {
      file: 'dist/request-animation-frame-polyfill.umd.js',
      format: 'umd',
      name: 'request-animation-frame-polyfill',
    },
  ],
  plugins: [typescript()],
};

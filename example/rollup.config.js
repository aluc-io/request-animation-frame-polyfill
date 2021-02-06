import typescript from '@rollup/plugin-typescript'

export default {
  input: 'index.ts',
  output: [
    {
      file: 'index.esm.js',
      format: 'es',
    },
  ],
  plugins: [typescript()],
};

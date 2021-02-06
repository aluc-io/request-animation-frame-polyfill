import typescript from '@rollup/plugin-typescript'
import babel, {getBabelOutputPlugin} from '@rollup/plugin-babel'


export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'request-animation-frame-polyfill',
    },
  ],
  plugins: [
    typescript(),
    babel({
      exclude:'node_modules/**',
      babelHelpers: 'bundled'
    })
  ],
};

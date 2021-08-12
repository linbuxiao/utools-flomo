import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import compiler from '@ampproject/rollup-plugin-closure-compiler';

export default {
  input: 'preload.js',
  output: {
    dir: 'dist',
    format: 'cjs',
    exports: 'auto'
  },
  plugins: [ nodeResolve({
    browser: true
  }), commonjs(), json(), compiler()]
};
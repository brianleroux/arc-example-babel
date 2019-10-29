import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/http/get-index/entry.js',
  output: {
    file: 'src/http/get-index/index.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      presets: [
        [
          '@babel/env',
          {
            modules: 'false',
            targets: {
              node: 10
            },
            useBuiltIns: 'usage',
            corejs: 3,
          }
        ]
      ],
      plugins: ["@babel/plugin-proposal-optional-chaining"]
    }),
    commonjs()
  ]
}

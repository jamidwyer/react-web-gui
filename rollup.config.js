import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: "inline",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: "inline",
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
        presets: ["@babel/env", "@babel/preset-react"],
      }),
    ],
  },
];

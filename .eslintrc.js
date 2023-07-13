module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  rules: {
    // Indentation
    indent: ["warn", 2],

    // Variable declarations
    "init-declarations": "off",
    "no-var": "error",

    // Best practices
    eqeqeq: ["error", "always"],
    "no-alert": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-loop-func": "error",
    "no-return-assign": "error",

    // Coding style
    "comma-dangle": ["warn", "always-multiline"],
    quotes: ["warn", "double"],
    semi: ["warn", "always"],
  },
};

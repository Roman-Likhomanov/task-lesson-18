const { off } = require("process");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "func-names": "off",
    "no-unused-vars": "off",
    "no-new": "off",
    "import/extensions": "off",
    "no-return-await": "off",
    "no-param-reassign": "off",
    "default-case": "off",
    "no-useless-escape": "off",
    "max-len": [
      "error",
      {
        ignoreComments: true,
      },
    ],
    "import/prefer-default-export": "off",
  },
};

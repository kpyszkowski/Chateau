module.exports = {
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@typescript-eslint/recommended"],
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/ban-ts-comment": "off",
  },
};

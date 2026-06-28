/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./app/global.css",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  printWidth: 96,
  endOfLine: "lf",
};

/** @type {import("prettier").Config} */

export default {
  singleQuote: true,
  trailingComma: "all",
  tabWidth: 2,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

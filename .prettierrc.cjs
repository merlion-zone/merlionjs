module.exports = {
  printWidth: 110,
  trailingComma: "all",
  overrides: [
    {
      files: "*.md",
      options: {
        printWidth: 80,
        proseWrap: "always",
      },
    },
  ],
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: ["^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

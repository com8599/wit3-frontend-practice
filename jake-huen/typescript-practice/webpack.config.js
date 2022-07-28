module.exports = {
  mode: "development",
  entry: "index.tsx",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
        {
            test:/\.tsx
        }
    ],
  },
};

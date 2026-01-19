module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./src",
            "@components": "./src/components",
            "@config": "./src/config",
            "@constants": "./src/constants",
            "@database": "./src/database",
            "@helpers": "./src/helpers",
            "@hooks": "./src/hooks",
            "@layouts": "./src/layouts",
            "@navigation": "./src/navigation",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@store": "./src/store",
            "@types": "./src/types",
            "@ui": "./src/components/ui",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        },
      ],
    ],
  };
};

const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const config = getDefaultConfig(__dirname);

// Добавляем поддержку алиасов
config.resolver = {
  ...config.resolver,
  alias: {
    "@": path.resolve(__dirname, "src"),
    "@components": path.resolve(__dirname, "src/components"),
    "@config": path.resolve(__dirname, "src/config"),
    "@constants": path.resolve(__dirname, "src/constants"),
    "@database": path.resolve(__dirname, "src/database"),
    "@helpers": path.resolve(__dirname, "src/helpers"),
    "@hooks": path.resolve(__dirname, "src/hooks"),
    "@layouts": path.resolve(__dirname, "src/layouts"),
    "@navigation": path.resolve(__dirname, "src/navigation"),
    "@screens": path.resolve(__dirname, "src/screens"),
    "@services": path.resolve(__dirname, "src/services"),
    "@store": path.resolve(__dirname, "src/store"),
    "@types": path.resolve(__dirname, "src/types"),
    "@ui": path.resolve(__dirname, "src/components/ui"),
  },
  extraNodeModules: {
    ...config.resolver.extraNodeModules,
  },
  // Добавьте эти расширения
  sourceExts: ["js", "jsx", "ts", "tsx", "json", "cjs"],
  assetExts: [
    "png",
    "jpg",
    "jpeg",
    "gif",
    "svg",
    "ttf",
    "otf",
    "woff",
    "woff2",
  ],
};

module.exports = config;

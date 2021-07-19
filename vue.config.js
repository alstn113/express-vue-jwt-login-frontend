const target = "http://localhost:3000";

module.exports = {
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
  devServer: {
    progress: false,
    port: 8080,
    proxy: {
      "^/api": {
        target,
        changeOrigin: true,
      },
    },
  },
};

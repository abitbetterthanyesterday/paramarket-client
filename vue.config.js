module.exports = {
  transpileDependencies: ["vuetify", "feathers-vuex"],
  chainWebpack: config => {
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .options({
        fix: true
      });
  }
};

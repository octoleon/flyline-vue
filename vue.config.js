module.exports = {
  transpileDependencies: ["vuetify"],

  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ["./node_modules"]
        }
      }
    }
  },
  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: "default",
      overrideEndpoint: false,
      region: "us-east-2",
      bucket: "flyline",
      createBucket: false,
      staticHosting: true,
      staticIndexPage: "index.html",
      staticErrorPage: "index.html",
      assetPath: "dist",
      assetMatch: "**",
      deployPath: "/",
      acl: "public-read",
      pwa: false,
      enableCloudfront: true,
      pluginVersion: "4.0.0-rc3",
      uploadConcurrency: 5,
      gzip: true,
      cloudfrontId: process.env.VUE_APP_CLOUDFRONT_ID,
      cloudfrontMatchers: "/"
    }
  }
};

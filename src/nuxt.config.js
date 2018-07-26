module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "src",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  mode: "spa",
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },

  css: [
    "~/assets/sass/app.scss",
    "~/assets/style/markdown.styl",
    "element-ui/lib/theme-chalk/index.css"
  ],

  plugins: [
    "~/plugins/editable",
    "~/plugins/components",
    "~/plugins/filepond",
    "~/plugins/masonry",
    "~/plugins/element-ui",
    { src: "~/plugins/editor", ssr: false }
  ],

  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    vendor: ["element-ui", "axios"],
    babel: {
      presets: ["es2015", "stage-0"],
      plugins: [
        [
          "transform-runtime",
          {
            polyfill: true,
            regenerator: true
          }
        ]
      ]
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient, isServer }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};

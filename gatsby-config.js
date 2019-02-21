module.exports = {
  siteMetadata: {
    title: `React Blog`,
    author: `Evan Fleet`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/client/pages/`
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: "localhost:8080/",
        hostingWPCOM: false,
        protocol: "http",
        useACF: true,
        auth: {}
      }
    }
  ]
};

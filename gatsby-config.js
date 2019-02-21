module.exports = {
  siteMetadata: {
    title: `React Blog`,
    author: `Evan Fleet`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/client/pages`
      }
    },
    `gatsby-plugin-typescript`
  ]
};

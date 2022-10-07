module.exports = {
  siteMetadata: {
    title: `Sofia Cheung`,
    author: `Sofia Cheung Guardia`,
    description: `My personal website`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Vidaloka`, `Raleway`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sofia Cheung`,
        short_name: `Sofia Ch`,
        start_url: `/`,
        icon: `src/assets/Avatar.svg`,
      },
    },
  ],
}

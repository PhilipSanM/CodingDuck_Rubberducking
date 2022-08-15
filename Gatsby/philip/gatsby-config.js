/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ["job", "project"],
  singleTypes: [`about`],
}
module.exports = {
  siteMetadata: {
    title: `Philip Portfolio`,
    description: `Awesome Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | Philip Portfolio`,
    url: `https://philipsanm.github.io/`,
    twitterUsername: `@philipsanm`,
    image: `/main.png`,
  },

  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
}

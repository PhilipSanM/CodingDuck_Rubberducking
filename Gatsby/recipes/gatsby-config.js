/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes stie",
    author: "@Me",
    person: { name: "pipe", age: 19 },
    simpleData: ["item 1", "item 2"],
    complexData: [
      { name: "pipe", age: 19 },
      { name: "Jonh", age: 22 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
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
  ],
}

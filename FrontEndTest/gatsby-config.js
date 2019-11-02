module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    // {
    //   resolve: "gatsby-source-custom-api",
    //   options: {
    //       url: "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"
    //   },
    //   imageKey: ["thumbnail"],
    //   rootKey: "brastlewark",
    //   schemas: {
    //     brastlewark: `
    //       id: ID
    //       name: String
    //       age: Int
    //       thumbnail: String
    //       weight: Float
    //       height: Float
    //       hair_color: String
    //       professions: Array
    //       friends: Array
    //     `
    //   }
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

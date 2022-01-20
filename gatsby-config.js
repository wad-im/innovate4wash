require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    siteUrl: "https://innovate4wash.quercus-group.com",
    title: "Innovate4WASH Kisumu 2022",
    description: "Innovate4WASH is a two-day marketplace platform for innovators, investors and enablers in Kenya's WASH sector.",
    defaultAuthor: "Quercus Group",
    image: '/mainMetaImage.jpg',
    themeColor: "#137A75"
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        createLinkInHead: true,
        excludes: [
          `/404`,
          `/404.html`,
          `/registration.html`,
          `/registration`,
          `/terms-and-conditions.html`,
          `/terms-and-conditions`,
          `/privacy-policy.html`,
          `/privacy-policy`,
        ]
      }
    },
    {
      resolve: `@raae/gatsby-plugin-fathom`,
      options: {
        site: "WVJEMMZV",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Innovate4WASH Kisumu 2022`,
        short_name: `Innovoate4WASH`,
        start_url: `/`,
        background_color: `#023C3C`,
        theme_color: `#137A75`,
        display: `standalone`,
        icon: 'src/images/icon.svg',
        lang: `en`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://innovate4wash.quercus-group.com`,
        noTrailingSlash: true,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "async",
        enableListener: true,
        preconnect: ["https://fonts.googleapis.com"],
        web: [{
            name: "Lato",
            file: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap",
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.AIRTABLE_TABLE_ID,
            tableName: `Sessions`,
            queryName: `Sessions`,
            tableLinks: [`Presentations`, `Speaker_(from_Presentations)`],
          },
          {
            baseId: process.env.AIRTABLE_TABLE_ID,
            tableName: `Registrations`,
            tableLinks: [`Presentation`, `Sessions_(from_Presentation)`],
          },
          {
            baseId: process.env.AIRTABLE_TABLE_ID,
            tableName: `Presentations`,
            tableLinks: [`Speaker`],
          },
          {
            baseId: process.env.AIRTABLE_TABLE_ID,
            tableName: `Sponsors/Partners`,
          }
        ]
      }
    }
  ],
};

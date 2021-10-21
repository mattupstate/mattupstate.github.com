module.exports = {
  siteMetadata: {
    siteUrl: "https://www.mattupstate.com",
    title: "mattupstate.com",
    author: "Matthew Wright",
    description: "Matt 'Upstate' Wright (He/him). Engineering team leader. Open source author and contributor. Aging hardcore punk enthusiast. LFC supporter.",
    keywords: ["software", "engineering", "leadership", "python", "programming", "open source"],
    siteUrl: "https://mattupstate.com"
  },
  plugins: [
    "gatsby-plugin-netlify-cms", 
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-552135-7"
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-pages`,
        path: `${__dirname}/_pages/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `source-files`,
        path: `${__dirname}/src`,
      },
    }
  ],
};

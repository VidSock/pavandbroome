const config = require('./config')

require('dotenv').config({ path: `.env` });
const flattenMenu = require('@gatsbystorefront/gatsby-theme-storefront-shopify/src/utils/flattenMenu');

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://dressupchef.netlify.app',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    rssMetadata: {
      site_url: config.siteUrl + pathPrefix,
      feed_url: config.siteUrl + pathPrefix + config.siteRss,
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${config.siteUrl + pathPrefix}/icons/manifest-icon-512.png`,
      author: config.userName,
      copyright: config.copyright,
    },



   


    gatsbyStorefrontConfig: {
      storeName: 'Dress Up Chef',
      storeDescription: 'Custom handmade designer button down chef kitchen aprons',
      email: 'toddlambert@gmail.com',
      company: 'Dress Up Chef',
      location: 'Gulfport, MS',
      address: '',
      phone: '+1 (800) 123-1234',
      workingDays: '',
      workingHours: '',
      socialNetworks: [
        'https://facebook.com',
        'https://instagram.com',
        'https://pinterest.com',
        'https://twitter.com',
        'https://youtube.com',
      ],
      payments: ['visa', 'mastercard', 'amex', 'discover', 'shopify', 'paypal'],
      // For available social share buttons see: https://github.com/nygardk/react-share
      shareButtons: [
        'Facebook',
        'Pinterest',
        'Twitter',
        'Tumblr',
        'Whatsapp',
        'Line',
        'Viber',
      ],
      googleAnalyticsId: 'UA-49869143-3',
      //
      // carousel, collection, product
      //
      mainPage: [
        {
          type: 'carousel',
          children: [
            {
              name: 'intro',
              type: 'collection',
              handle: 'dress-up-chef',
              textColor: 'white',
              textBgColor: 'black',
            },
            {
              name: 'Memorial Day',
              type: 'product',
              handle: 'designer-kitchen-apron',
              textColor: 'white',
              textBgColor: 'primary',
            },
            {
              name: 'ship',
              type: 'collection',
              handle: 'free-shipping',
              textColor: 'white',
              textBgColor: 'black',
            },
           
          ],
        },
        {
          name: '',
          type: 'collection',
          handle: 'free-shipping1',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'Photography',
          type: 'collection',
          handle: 'twilightscapes-prints',
          textColor: 'white',
          textBgColor: 'primary',
        },
        {
          name: 'Test',
          type: 'product',
          handle: 'zombie-bucket',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'One product',
          type: 'product',
          handle: 'red-sports-tee',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'Anchor Bracelet Mens',
          type: 'product',
          handle: 'leather-anchor',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'Yellow Sofa',
          type: 'product',
          handle: 'yellow-sofa',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: '7 Shakra Bracelet',
          type: 'product',
          handle: 'chain-bracelet',
          textColor: 'black',
          textBgColor: 'white',
        },
        {
          name: 'White Cotton Shirt',
          type: 'product',
          handle: 'white-cotton-shirt',
          textColor: 'white',
          textBgColor: 'primary',
        },
      ],
      // Menu types: "header", "collection", "product", "link"
      menu: flattenMenu({
        name: 'Menu',
        type: 'top',
        children: [
          {
            name: "Women's",
            type: 'header',
            handle: '',
            link: '',
            children: [
              {
                name: 'Apparel',
                type: 'collection',
                handle: 'apparel',
              },
              {
                name: 'Jewelery',
                type: 'collection',
                handle: 'jewelery',
              },
              {
                name: 'One product',
                type: 'product',
                handle: 'red-sports-tee',
              },
            ],
          },
          {
            name: "Men's",
            type: 'header',
            children: [
              {
                name: 'Test',
                type: 'collection',
                handle: 'test-collection',
              },
              {
                name: 'Garden',
                type: 'collection',
                handle: 'garden',
              },
              {
                name: 'Apparel',
                type: 'collection',
                handle: 'apparel',
              },
              {
                name: 'External links',
                type: 'header',
                children: [
                  {
                    name: 'External link 2',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                  {
                    name: 'External link 3',
                    type: 'external',
                    link: 'https://amazon.com',
                  },
                ],
              },
            ],
          },
          { name: 'Blog', type: 'blog', handle: '' },
        ],
      }),
      footerLinks: [
        {
          name: 'About us',
          link: '/about',
        },
        {
          name: 'Terms of Service',
          link: '/shop/policy/termsOfService',
        },
        {
          name: 'Privacy policy',
          link: '/shop/policy/privacyPolicy',
        },
        {
          name: 'Refunds',
          link: '/shop/policy/refundPolicy',
        },
        {
          name: 'Site by Todd',
          link: 'https://toddlambert.com',
        },
      ],
      locales: 'en-US',
      currency: 'USD',
      productsPerCollectionPage: '9',
      articlesPerBlogPage: '6',
    },
  },




  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-dark-mode`,
    
    	  {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-49869143-3"],
      },
    },
    
    {
    resolve: "gatsby-plugin-netlify-cache",
    options: {
      extraDirsToCache: [
        "img/favorites",
        "img/gallery1",
        "img/gallery6",
        "extra/splashscreens"
      ]
    }
  },


  {
    resolve: 'gatsby-plugin-web-font-loader',
    options: {
      google: {
        families: ['Kanit:ital,wght@1,900']
      }
    }
  },





  {
    resolve: '@gatsbystorefront/gatsby-theme-storefront-shopify',
    options: {
      shopName: process.env.GATSBY_SHOP_NAME,
      accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
      basePath: '/shop',
      shopifyLite: true, // default 'false'
      enableWebp: true, // default 'true'
      imageQuality: '55', // default '95', better to decrease but always check your result images quality
      // pathToConfigModule: path.join(__dirname, `src/utils/typography`),
    },
  },
    
{ 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['headroom', 'headroom--unfixed'], // Don't remove this selector
         //ignore: ['index.css'], // Ignore files/folders
         purgeOnly : ['/index.css', '/animate.css', '/custom.css', '/noscript.css'], // Purge only these files/folders
      }
    },
    

    
  
    
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: true,
        htmlTitle: `Dress Up Chef Content Manager`,
      },
    },


    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icons: [
          {
            src: `/icons/manifest-icon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/icons/manifest-icon-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup (ref) {
          const ret = ref.query.site.siteMetadata.rssMetadata
          ret.allMarkdownRemark = ref.query.allMarkdownRemark
          ret.generator = config.siteTitle
          return ret
        },
        query: `
                {
                  site {
                    siteMetadata {
                      rssMetadata {
                        site_url
                        feed_url
                        title
                        description
                        image_url
                        author
                        copyright
                      }
                    }
                  }
                }
              `,
        feeds: [
          {
            serialize (ctx) {
              const rssMetadata = ctx.query.site.siteMetadata.rssMetadata
              return ctx.query.allMarkdownRemark.edges
                .filter(
                  edge => edge.node.frontmatter.templateKey === 'article-page'
                )
                .map(edge => ({
                  categories: edge.node.frontmatter.tags,
                  date: edge.node.frontmatter.date,
                  title: edge.node.frontmatter.title,
                  description: edge.node.excerpt,
                  author: rssMetadata.author,
                  url: rssMetadata.site_url + edge.node.fields.slug,
                  guid: rssMetadata.site_url + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                }))
            },
            query: `
                    {
                      allMarkdownRemark(
                        limit: 1000,
                        sort: { order: DESC, fields: [frontmatter___date] },
                      ) {
                        edges {
                          node {
                            excerpt(pruneLength: 400)
                            html
                            id
                            fields { slug }
                            frontmatter {
                              title
                              templateKey
                              cover
                              date(formatString: "MMMM DD, YYYY")
                              tags
                            }
                          }
                        }
                      }
                    }
                  `,
            output: config.siteRss,
            title: config.siteTitle,
          },
        ],
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            tags: node => node.frontmatter.tags,
            slug: node => node.fields.slug,
          },
        },
      },
    },
    `gatsby-plugin-netlify`,
  ],
}

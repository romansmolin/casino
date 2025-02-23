module.exports = () => ({});

module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    graphql: {
      enabled: true,
      config: {
        shadowCRUD: true,
        playgroundAlways: true,
        defaultLimit: 10,
        maxLimit: 20,
        apolloServer: {
          tracing: true,
        },
      },
    },
    "apollo-sandbox": {
      // enables the plugin only in development mode
      // if you also want to use it in production, set this to true
      // keep in mind that graphql playground has to be enabled
      enabled: process.env.NODE_ENV === "production" ? false : true,
      config: {

        // endpoint: "https://tunneled-strapi.com/graphql", // OPTIONAL - endpoint has to be accessible from the browser
      }
    }
  });

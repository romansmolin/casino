module.exports = ({ env }) => ({
  // Note: Cloudinary upload provider was removed during Strapi v5 migration
  // To re-enable Cloudinary uploads, install: @strapi/provider-upload-cloudinary
  // and uncomment the configuration below
  
  // upload: {
  //   config: {
  //     provider: 'cloudinary',
  //     providerOptions: {
  //       cloud_name: env('CLOUDINARY_NAME'),
  //       api_key: env('CLOUDINARY_KEY'),
  //       api_secret: env('CLOUDINARY_SECRET'),
  //     },
  //     actionOptions: {
  //       upload: {},
  //       uploadStream: {},
  //       delete: {},
  //     },
  //   },
  // },

  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
        region: env('AWS_REGION'),
        params: {
          ACL: env('AWS_ACL', 'public-read'),
          signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
          Bucket: env('AWS_S3_BUCKET'),
        },
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

  'strapi-advanced-uuid': {
    enabled: true,
  },

  'multi-select': {
    enabled: true,
  },

  // Apollo Sandbox temporarily disabled due to Strapi v5 compatibility issues
  // The GraphQL playground is still available at /graphql
  // "apollo-sandbox": {
  //   enabled: process.env.NODE_ENV === "production" ? false : true,
  //   config: {
  //     // endpoint: "https://tunneled-strapi.com/graphql", // OPTIONAL - endpoint has to be accessible from the browser
  //   }
  // }
});

module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
      jwtSecret: env('JWT_SECRET'),
      },
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME', "strapi_1"),
          api_key: env('CLOUDINARY_KEY', "133642461353478"),
          api_secret: env('CLOUDINARY_SECRET', "IiR9mc085yhlDEE5EO-jA7jiSjE"),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
  });

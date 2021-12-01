module.exports = ({ env }) => ({
    upload: {
      provider: 'nft-storage',
      providerOptions: {
        apiKey: env('NFT_STORAGE_API_KEY')
      },
    },
    email: {
        provider: 'amazon-ses',
        providerOptions: {
          key: env('AWS_ACCESS_KEY_ID'),
          secret: env('AWS_ACCESS_SECRET'),
          amazon: 'https://email.us-east-1.amazonaws.com',
        },
        settings: {
          defaultFrom: 'aletheiadata@gmail.com',
          defaultReplyTo: 'aletheiadata@gmail.com',
        },
    },
});
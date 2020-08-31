module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'support@rouse.yoga',
      defaultReplyTo: 'support@rouse.yoga',
    },
  },
  // ...
});
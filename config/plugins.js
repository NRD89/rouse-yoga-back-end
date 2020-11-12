module.exports = ({ env }) => ({
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "support@rouse.yoga",
      defaultReplyTo: "support@rouse.yoga",
    },
  },
  graphql: {
    endpoint: "/graphql",
    tracing: false,
    shadowCRUD: true,
    playgroundAlways: false,
    depthLimit: 7,
    amountLimit: 100,
  },
});

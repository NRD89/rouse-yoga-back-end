module.exports = ({ env }) => ({
  host: env("HOST", "127.0.0.1"),
  port: env.int("PORT", 1337),
  url: "https://api.rouse.yoga",
  admin: {
    url: "https://admin.rouse.yoga",
    serveAdminPanel: false,
    auth: {
      secret: env("ADMIN_JWT_SECRET", "6bfb8c3b741c9e430947cb8be8736da1"),
    },
  },
});

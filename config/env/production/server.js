module.exports = ({ env }) => ({
  host: env("HOST", "127.0.0.1"),
  port: env.int("PORT", 1337),
  url: "https://api.rouse.yoga",
  admin: {
    url: "https://admin.rouse.yoga",
    serveAdminPanel: false,
    auth: {
      secret: env("ADMIN_JWT_SECRET", "1f89e1f5df43ebd5decd1c9a60b0b8b2"),
    },
  },
});

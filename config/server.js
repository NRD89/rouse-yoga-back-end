module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "1f89e1f5df43ebd5decd1c9a60b0b8b2"),
    },
  },
});

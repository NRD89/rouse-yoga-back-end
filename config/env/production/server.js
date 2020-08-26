module.exports = ({ env }) => ({
  host: env("HOST", "127.0.0.1"),
  port: env.int("PORT", 1337), 
  url: "https://api.rouse.yoga", 
  admin: {
      url: "https://admin.rouse.yoga", 
      serveAdminPanel: false,
  },
});

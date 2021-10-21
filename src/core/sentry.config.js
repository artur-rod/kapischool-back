global.Sentry = require("@sentry/node");

Sentry.init({
  dsn: process.env.SENTRY_API_DNS,
  tracesSampleRate: 1.0,
});

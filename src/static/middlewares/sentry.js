require("../../core/sentry.config");

module.exports = (req, res, next) => {
  const transaction = Sentry.startTransaction({
    op: "error",
    name: req.originalUrl,
  });
  req.transaction = transaction;

  next();
};

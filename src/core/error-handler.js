const sentryError = async (error) => {
  try {
    Sentry.captureException(error);
  } catch (err) {
    throw err;
  }
};

module.exports = sentryError;

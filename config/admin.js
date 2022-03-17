module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '07847bedbd2c4aae218994a9841d9a1b'),
  },
});

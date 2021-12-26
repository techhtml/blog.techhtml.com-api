module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '82827baed3b084a94b49f9b4bbad5af4'),
  },
});

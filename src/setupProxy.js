const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ai',
    createProxyMiddleware({
      target: 'https://api.moonsunpower.com',
      changeOrigin: true,
      secure: true,
    })
  );
};


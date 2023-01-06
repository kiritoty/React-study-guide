const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/test',
    createProxyMiddleware({
      target: 'https://i.maoyan.com',
      changeOrigin: true,
      pathRewrite: {'^/test': ''}
    })
  );
};
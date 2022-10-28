const ROUTES = [
  {
    url: '/api/initialize-transaction/',
    auth: true,
    proxy: {
      target:
        'http://payment-service:3003/api/transaction/initialize-transaction',
      changeOrigin: true,
      pathRewrite: {
        [`^/api/initialize-transaction/`]: ''
      }
    }
  }
];

export default ROUTES;

// This is where we redirect all our routes to other services

const ROUTES = [
  {
    url: '/api/products/',
    auth: false,
    proxy: {
      target: 'http://product-service:3001/api/products',
      changeOrigin: true,
      pathRewrite: {
        [`^/api/products/`]: ''
      }
    }
  },
  {
    url: '/api/products/:productId',
    auth: false,
    proxy: {
      target: 'http://product-service:3001/api/products/:productId',
      changeOrigin: true,
      pathRewrite: {
        [`^/api/products/:id`]: ''
      }
    }
  }
];

export default ROUTES;

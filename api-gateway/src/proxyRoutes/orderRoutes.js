// This is where we redirect all our routes to other services

const ROUTES = [
  {
    url: '/api/create-orders/',
    auth: true,
    proxy: {
      target: 'http://order-service:3002/api/orders',
      changeOrigin: true,
      pathRewrite: {
        [`^/api/create-orders/`]: ''
      }
    }
  },
  {
    url: '/api/orders/',
    auth: false,
    proxy: {
      target: 'http://order-service:3002/api/orders',
      changeOrigin: true,
      pathRewrite: {
        [`^/api/orders/`]: ''
      }
    }
  }
];

export default ROUTES;

// This is where we redirect all our routes to other services

const ROUTES = [
  {
    url: '/api/create-orders/',
    auth: true,
    proxy: {
      target: 'http://localhost:3002/api/orders',
      changeOrigin: true,
      pathRewrite: {
        [`^/api/create-orders/`]: ''
      }
    }
  },
  {
    url: '/api/free',
    auth: false,
    proxy: {
      target: 'https://www.google.com',
      changeOrigin: true,
      pathRewrite: {
        [`^/api/free`]: ''
      }
    }
  }
];

export default ROUTES;

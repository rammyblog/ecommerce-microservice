// This is where we redirect all our routes to other services

const ROUTES = [
  {
    url: '/api/initialize-transaction/',
    auth: true,
    proxy: {
      target: 'http://localhost:3003/api/transaction/initialize-transaction/',
      changeOrigin: true,
      pathRewrite: {
        [`^/api/initialize-transaction/`]: ''
      }
    }
  }
  //   {
  //     url: '/api/orders/',
  //     auth: false,
  //     proxy: {
  //       target: 'http://localhost:3002/api/orders',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         [`^/api/orders/`]: ''
  //       }
  //     }
  //   }
];

export default ROUTES;

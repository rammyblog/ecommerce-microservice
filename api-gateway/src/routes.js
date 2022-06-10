// This is where we redirect all our routes to other services

const ROUTES = [
  {
    url: '/api/protected',
    auth: true,
    proxy: {
      target: 'http://localhost:3000/api/free',
      changeOrigin: true,
      pathRewrite: {
        [`^/api/protected`]: ''
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

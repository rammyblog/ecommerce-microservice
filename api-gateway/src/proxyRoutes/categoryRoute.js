// This is where we redirect all our routes to other services

const ROUTES = [
  {
    url: '/api/categories',
    auth: true,
    proxy: {
      target: 'http://localhost:3001/api/categories/',
      changeOrigin: true,
      pathRewrite: {
        [`^/api/categories`]: ''
      }
    }
  },
  {
    url: '/api/categories/:categoryId',
    auth: false,
    proxy: {
      target: 'http://localhost:3001/api/categories/:categoryId',
      changeOrigin: true,
      pathRewrite: {
        [`^/api/categories/:id`]: ''
      }
    }
  }
];

export default ROUTES;

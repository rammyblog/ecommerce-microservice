import { ensureAuth } from './middleware/auth.js';

const setupAuth = (app, routes) => {
  routes.forEach((route) => {
    if (route.auth) {
      app.use(route.url, ensureAuth, function (req, res, next) {
        next();
      });
    }
  });
};

export default setupAuth;

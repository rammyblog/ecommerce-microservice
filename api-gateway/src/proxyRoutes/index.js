import orderRoutes from './orderRoutes.js';
import paymentRoutes from './paymentRoutes.js';
import categoryRoutes from './categoryRoute.js';
import productRoutes from './productRoutes.js';

export default [
  ...paymentRoutes,
  ...orderRoutes,
  ...categoryRoutes,
  ...productRoutes
];

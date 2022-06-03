import dotenv from 'dotenv';
import express from 'express';
import connectDb from './db/index.js';
import setupLogging from './logging.js';
import productRoutes from './routes/product.routes.js';
import categoryRoutes from './routes/category.routes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDb();
const port = process.env.PORT || 3000;

setupLogging(app);

app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);

app.listen(port, () => {
  console.log(`product-service app listening at http://localhost:${port}`);
});

import dotenv from 'dotenv';
import express from 'express';
import connectDb from './db/index.js';
import setupLogging from './logging.js';
import productRoutes from './routes/product.routes.js';
import categoryRoutes from './routes/category.routes.js';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js'


dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDb();
const port = 3000;

setupLogging(app);



app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);


//Error handler middleware
app.use(errorHandlerMiddleware);
app.listen(port, () => {
  console.log(`product-service app listening at http://localhost:${port}`);
});

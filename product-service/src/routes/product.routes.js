// const express = require("express");
import express from 'express';
import productController  from '../controllers/product.controller.js';
// const productController = require("../controllers/product");


const router = express.Router();

const {
  getAllProducts,
  createProduct,
  getAProduct,
  deleteProduct,
  updateProduct,
  getProductsByCategory
} = productController;


// Product routes
router.get("/products",getAllProducts);
router.get("/products/:productId", getAProduct)
router.post("/products", createProduct)
router.delete("/products/:productId",deleteProduct)
router.patch("/products/:productId", updateProduct);
router.get("/category/:categoryId/products",getProductsByCategory);

export default router;

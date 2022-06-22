// const express = require("express");
import express from 'express';
import productController  from '../controllers/product.controller.js';


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
router.get("/",getAllProducts);
router.get("/:productId", getAProduct)
router.post("/", createProduct)
router.delete("/:productId",deleteProduct)
router.patch("/:productId", updateProduct);
router.get("/:categoryId/products",getProductsByCategory);

export default router;

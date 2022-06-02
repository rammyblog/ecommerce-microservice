

import express from 'express';
import categoryController  from '../controllers/category.controller.js';

const router = express.Router();
const {
  getAllCategories,
  createCategory,
  getACategory,
  deleteCategory,
  updateCategory
} = categoryController;


// Category routes
router.get("/categories",getAllCategories);
router.get("/categories/:categoryId", getACategory)
// router.route()
router.post("/categories",  createCategory)
router.delete("/categories/:categoryId", deleteCategory)
router.patch("/categories/:categoryId",  updateCategory);
export default router;

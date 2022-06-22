

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
router.get("/",getAllCategories);
router.get("/:categoryId", getACategory)
router.post("/categories",  createCategory)
router.delete("/:categoryId", deleteCategory)
router.patch("/:categoryId",  updateCategory);
export default router;

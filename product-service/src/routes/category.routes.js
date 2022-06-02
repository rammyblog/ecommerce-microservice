const express = require("express");

const categoryController = require("../controllers/category");
const authMiddleware = require("../middleware/authMiddleware");
const {createValidator} = require("../validators/category")

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
module.exports = router;
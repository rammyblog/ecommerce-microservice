
import Category from "../models/Category.js"
import SuccessResponse from "../utils/success.js"
import ErrorResponse from "../utils/error.js"
import categorySchema from "../validators/category.js"

const category = {
    // @desc    Get all categories
    // @route   POST /api/v1/categories
    // @access  Public
  async getAllCategories(req, res, next) {
    try {
      const categoryCollection = await Category.findAll({})
      return SuccessResponse(res, "Category retrieved successfully", categoryCollection,  200)
      
    } catch (e) {
        console.log(e)
        return next(new ErrorResponse(e, 500));
    }
  },
    // @desc    Get a category
    // @route   POST /api/v1/categories/categoryId
    // @access  Private
  async getACategory(req, res, next) {
    try {
      const categoryCollection = await Category.findByPk(req.params.categoryId)
        if(categoryCollection === null){
          return next(new ErrorResponse(`Category with the id of ${req.params.categoryId} does not exist`, 404));
        }
        else{
          return SuccessResponse(res, "Category retrieved successfully", categoryCollection,  200)

    } 
    } catch (e) {
        console.log(e)
        return next(new ErrorResponse(e, 500));

    }
  },
    // @desc    Create a new category
    // @route   POST /api/v1/categories
    // @access  Private
  async createCategory(req, res, next) {
    try {
      const result = await categorySchema.validateAsync(req.body)

        const categoryExists = await Category.findOne({ where:{name: req.body.name }});
        if(categoryExists){
          return next(new ErrorResponse(`Category with the id of ${req.body.name} does not exist`, 400));
        }  
        const categoryCollection = await Category.create({
            name: req.body.name,
            description: req.body.description,
            isActive: true
        })
        return SuccessResponse(res, "Category created successfully", categoryCollection,  201)

    } catch (e) {
      return next(new ErrorResponse(e.message, 500));


    }
  },
    // @desc    Update a particular category in the database
    // @route   PATCH /api/v1/categories/:categoryId
    // @access  Private
  async updateCategory(req, res, next) {
    try {
        const result = await categorySchema.validateAsync(req.body)
        const category = await Category.findByPk(req.params.categoryId)
          if(category === null){
        
          return next(new ErrorResponse(`Category with the id of ${req.params.categoryId} does not exist`, 404));

          }
          else{
          await category.update({
            name:req.body.name ? req.body.name : category.name,
            description:req.body.description ? req.body.description : category.description,
            isActive: req.body.isActive ? req.body.isActive : category.isActive

          });
          return SuccessResponse(res, "Category updated successfully", categoryCollection,  200)

       
      } 
      } catch (e) {
          console.log(e)
          return next(new ErrorResponse(e, 500));

      }
},

    // @desc    Delete a particular category in the database
    // @route   DELETE /api/v1/category/:categoryId
    // @access  Private
    async deleteCategory(req, res, next) {
        try {
            const category = await Category.findByPk(req.params.categoryId)
              if(category === null){
             
              return next(new ErrorResponse(`Category with the id of ${req.params.categoryId} does not exist`, 404));

              }
              else{
               await category.destroy();
               return res.status(204).json();
          } 
          } catch (e) {
              console.log(e)
              return next(new ErrorResponse(e.message, 500));

          }
    },
}

export default category
import User from '../models/User.js';
import SuccessResponse from '../utils/success.js';
import ErrorResponse from '../utils/error.js';

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    return SuccessResponse(res, 'Users retrieved successfully', users, 200);
  } catch (err) {
    return next(new ErrorResponse(err.message, 400));
  }
};

export const getSingleUser = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    return SuccessResponse(res, 'User retrieved successfully', user, 200);
  } catch (err) {
    return next(new ErrorResponse(err.message, 400));
  }
};

export const getLoggedInUser = async(req, res, next) => {
  try {
    
  } catch (error) {
    
  }
}

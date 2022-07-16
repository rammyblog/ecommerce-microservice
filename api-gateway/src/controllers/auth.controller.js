import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import getUser from '../services/user.services.js';
import passwordEncrypt from '../utils/passwordEncryption.js';
import {
  registerValidation,
  loginValidation
} from '../utils/user.validation.js';
import SuccessResponse from '../utils/success.js';
import ErrorResponse from '../utils/error.js';
const validation = {
  register: registerValidation,
  login: loginValidation
};

const handleValidation = (body, res, type) => {
  const { error } = validation[type](body);
  if (error) {
    throw Error(error.details[0].message);
  }
};

export const createUser = async (req, res, next) => {
  try {
    handleValidation(req.body, res, 'register');
    //   Checking if the user is already in the db
    const emailExist = await User.findOne({ where: { email: req.body.email } });

    if (emailExist) {
      return next(new ErrorResponse('E-Mail already exists', 400));
    }
    req.body.password = await passwordEncrypt(req.body.password);

    // Create a new user
    console.log(req.body);
    const user = await User.create(req.body);
    // Send email using sendgrid here
    return SuccessResponse(
      res,
      'User created successfully',
      user.toJSON(),
      201
    );
  } catch (err) {
    return next(new ErrorResponse(err.message, 400));
  }
};

export const loginUser = async (req, res, next) => {
  // Validate data before creating a user

  try {
    handleValidation(req.body, res, 'login');
    //   Checking if the user is already in the db
    const user = await getUser({
      where: { email: req.body.email }
    });

    //   Password check
    const validPass = await bcrypt.compare(req.body.password, user.password);

    if (!validPass) {
      return next(new ErrorResponse('Incorrect details', 400));
    }

    //   Create and assign a token
    const token = jwt.sign(
      { id: user.id, role: user.role, email: user.email },
      process.env.TOKEN_SECRET
    );
    return SuccessResponse(res, 'Login successful', token, 200);
  } catch (err) {
    return next(new ErrorResponse(err.message, 400));
  }
};

export const validateUser = async (req, res, next) => {
  try {
    //   Checking if the user is already in the db
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    const { id } = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await getUser({
      where: { id }
    });

    if (!user) {
      return next(new ErrorResponse('Incorrect details', 400));
    }

    return SuccessResponse(res, 'successful', user, 200);
  } catch (err) {
    return next(new ErrorResponse(err.message, 400));
  }
};

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import getUser from '../services/user.services.js';
import passwordEncrypt from '../utils/passwordEncryption.js';
import {
  registerValidation,
  loginValidation
} from '../utils/user.validation.js';

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

export const createUser = async (req, res) => {
  try {
    handleValidation(req.body, res, 'register');
    //   Checking if the user is already in the db
    const emailExist = await User.findOne({ where: { email: req.body.email } });

    if (emailExist) {
      return res.status(400).json({ error_msg: 'E-Mail already exists' });
    }
    req.body.password = await passwordEncrypt(req.body.password);

    // Create a new user
    console.log(req.body);
    const user = await User.create(req.body);
    // Send email using sendgrid here
    console.log(user.toJSON());
    return res.status(201).json({ data: user.toJSON() });
  } catch (err) {
    console.log({ err });
    return res.status(400).json({ error_msg: err.message });
  }
};

export const loginUser = async (req, res) => {
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
      return res.status(400).json({ error_msg: 'Invalid password' });
    }

    //   Create and assign a token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.TOKEN_SECRET
    );
    return res.status(200).json({ access_token: token });
  } catch (err) {
    return res.status(400).json({ error_msg: err.message });
  }
};

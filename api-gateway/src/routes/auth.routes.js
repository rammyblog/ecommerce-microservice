import express from 'express';
import {
  createUser,
  loginUser,
  validateUser
} from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/validate', validateUser);
export default router;

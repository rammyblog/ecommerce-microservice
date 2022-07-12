import express from 'express';
import {
  getAllUsers,
  getSingleUser,
  getLoggedInUser
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.get('/loggedInUser', getLoggedInUser);

export default router;

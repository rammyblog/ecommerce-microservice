import express from 'express';
import { getAllUsers, getSingleUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);

export default router;

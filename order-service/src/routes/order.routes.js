import express from 'express';
import {
  createOrder,
  getOrders,
  getSingleOrder,
  getUserOrders,
} from '../controller/order.controller.js';
import ensureAuth from '../middleware/auth.js';
const router = express.Router();

router.post('/', ensureAuth, createOrder);
router.get('/', getOrders);
router.get('/:id', ensureAuth, getSingleOrder);
router.get('/user/', ensureAuth, getUserOrders);

export default router;

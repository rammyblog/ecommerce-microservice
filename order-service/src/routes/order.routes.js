import express from 'express';
import { createOrder } from '../controller/order.controller.js';
import ensureAuth from '../middleware/auth.js';
const router = express.Router();

router.post('/', ensureAuth, createOrder);

export default router;

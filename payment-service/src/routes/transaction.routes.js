import express from 'express';
import {
  initializeTransaction,
  paystackWebhook,
} from '../controller/transaction.controller.js';
import ensureAuth from '../middleware/auth.js';

const router = express.Router();

router.post('/initialize-transaction', ensureAuth, initializeTransaction);
router.post('/paystack-webhook', paystackWebhook);

export default router;

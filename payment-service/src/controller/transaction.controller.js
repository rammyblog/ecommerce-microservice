import Paystack from '../paystack.js';
import crypto from 'crypto';
import { initializeTransactionValidation } from '../utils/transaction.validation.js';
import TransactionService from '../services/transaction.services.js';
import kafkaProducer from '../worker/producer.js';

const validation = {
  initializeTransaction: initializeTransactionValidation,
};

const handleValidation = (body, res, type) => {
  const { error } = validation[type](body);
  if (error) {
    console.log(error);
    throw Error(error.details[0].message);
  }
};

export const initializeTransaction = async (req, res) => {
  try {
    handleValidation(req.body, res, 'initializeTransaction');
    const { amount, orderId } = req.body;
    const paystackTransaction = await Paystack.initializeTransaction(
      amount,
      req.user.email
    );
    const transaction = TransactionService.init();
    transaction.orderId = orderId;
    transaction.amount = amount;
    transaction.reference = paystackTransaction.data.reference;
    transaction.userId = req.user.id;
    await TransactionService.create(transaction);
    res.status(201).json({ paystackTransaction });
  } catch (err) {
    console.log({ err });
    return res.status(400).json({ error_msg: err.message });
  }
};

export const verifyTransaction = async (req, res) => {
  try {
    const { reference } = req.body;
    const paystackTransaction = await Paystack.verifyTransaction(reference);
    res.status(201).json({ paystackTransaction });
  } catch (err) {
    console.log({ err });
    return res.status(400).json({ error_msg: err.message });
  }
};

export const paystackWebhook = async (req, res) => {
  try {
    const secret = process.env.PAYSTACK_SECRET_KEY;
    const hash = crypto
      .createHmac('sha512', secret)
      .update(JSON.stringify(req.body))
      .digest('hex');

    if (hash == req.headers['x-paystack-signature']) {
      // Retrieve the request's body
      const event = req.body;
      if (event.event === 'charge.success') {
        const { data } = event;
        const transaction = await TransactionService.getByReference(
          data.reference
        );
        console.log(transaction);
        console.log({ status: 'successful', orderId: transaction.orderId });
        kafkaProducer('transaction-success', {
          value: JSON.stringify({
            status: 'successful',
            orderId: transaction.orderId,
          }),
        });
        if (transaction) {
          transaction.paid = true;
          await TransactionService.update(transaction);
        }
        res.sendStatus(200);
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error_msg: error.message });
  }
};

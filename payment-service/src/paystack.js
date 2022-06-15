import axios from 'axios';
axios.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${process.env.PAYSTACK_SECRET_KEY}`;
  return config;
});

const TRANSACTION_INITIALIZATION_URL =
  'https://api.paystack.co/transaction/initialize';

// export default class Paystack {
//   constructor() {}

//   async initializeTransaction(amount, email) {
//     console.log;
//     const response = await axios.post(TRANSACTION_INITIALIZATION_URL, {
//       amount: amount * 100,
//       email: email,
//     });
//     return response.data;
//   }
// }
const Paystack = {
  initializeTransaction: async (amount, email) => {
    const response = await axios.post(TRANSACTION_INITIALIZATION_URL, {
      amount: amount * 100,
      email: email,
    });
    return response.data;
  },
};

export default Paystack;

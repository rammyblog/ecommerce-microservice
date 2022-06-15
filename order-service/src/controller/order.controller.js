import OrderService from '../services/order.services.js';
import OrderDetailService from '../services/orderDetail.services.js';
import { createOrderValidation } from '../utils/order.validation.js';

const validation = {
  createOrder: createOrderValidation,
};

const handleValidation = (body, res, type) => {
  const { error } = validation[type](body);
  if (error) {
    console.log(error);
    throw Error(error.details[0].message);
  }
};

export const createOrder = async (req, res) => {
  try {
    handleValidation(req.body, res, 'createOrder');
    const { cart, address, phoneNumber } = req.body;
    const newOrder = OrderService.init();
    newOrder.address = address;
    newOrder.phoneNumber = phoneNumber;
    newOrder.userId = req.user.id;
    newOrder.amount = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    const order = await OrderService.create(newOrder);
    // I am trusting the frontend here(Bad design but I am feeling lazy -samson should fix this for us)
    const orderDetailsArray = [];
    cart.forEach(async (item) => {
      item.price = parseFloat(item.price);
      item.quantity = parseInt(item.quantity);
      const newOrderDetail = OrderDetailService.init();
      newOrderDetail.productId = item.productId;
      newOrderDetail.price = item.price;
      newOrderDetail.quantity = item.quantity;
      newOrderDetail.orderId = order.id;
      // defer the creation
      orderDetailsArray.push(OrderDetailService.create(newOrderDetail));
    });
    order.order_details = await Promise.all(orderDetailsArray);

    await OrderService.update(order);
    // send topic to payment service
    res.status(201).json({ order });
  } catch (err) {
    console.log({ err });
    return res.status(400).json({ error_msg: err.message });
  }
};



export const getOrders = async (req, res) => {
  try {
    const orders = await OrderService.getAll();
    res.status(200).json({ orders });
  } catch (err) {
    console.log({ err });
    return res.status(400).json({ error_msg: err.message });
  }
};

export const getSingleOrder = async (req, res) => {
  try {
    const order = await OrderService.getById(req.params.id);
    res.status(200).json({ order });
  } catch (err) {
    console.log({ err });
    return res.status(400).json({ error_msg: err.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await OrderService.getByUserId(req.user.id);
    res.status(200).json({ orders });
  } catch (err) {
    console.log({ err });
    return res.status(400).json({ error_msg: err.message });
  }
};

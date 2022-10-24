import OrderService from '../services/order.services.js';
import OrderDetailService from '../services/orderDetail.services.js';
import { createOrderValidation } from '../utils/order.validation.js';
import fetch from 'node-fetch';
import ErrorResponse from '../utils/error.js';
import SuccessResponse from '../utils/success.js';

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

export const createOrder = async (req, res, next) => {
  try {
    handleValidation(req.body, res, 'createOrder');
    const productBaseUrl = `${process.env.PRODUCTMS_BASE_URL}`;

    const { cart, address, phoneNumber } = req.body;
    const newOrder = OrderService.init();
    newOrder.address = address;
    newOrder.phoneNumber = phoneNumber;
    newOrder.userId = req.user.id;
    newOrder.amount = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    const orderDetailsArray = [];
    const order = await OrderService.create(newOrder);
    cart.forEach(async (item) => {
      const url = `http://product-service:3001/api/products/${item.productId}`;

      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(url, options);
      const jsonResponse = await response.json();
      const data = jsonResponse.data;
      if (
        data.id === parseInt(item.productId) &&
        data.sellingPrice === parseInt(item.price)
      ) {
        item.price = parseFloat(item.price);
        item.quantity = parseInt(item.quantity);
        const newOrderDetail = OrderDetailService.init();
        newOrderDetail.productId = item.productId;
        newOrderDetail.price = item.price;
        newOrderDetail.quantity = item.quantity;
        newOrderDetail.orderId = order.id;

        // console.log({ newOrderDetail });

        // defer the creation
        // orderDetailsArray.push(await OrderDetailService.create(newOrderDetail));
        // console.log({ orderDetailsArray });

        const order_details = await OrderDetailService.create(newOrderDetail);
        const updateValues = {
          order_details,
        };
        await OrderService.updateOrderDetails(order, order_details.id);
      }
    });
    // send topic to payment service
    return SuccessResponse(res, 'Order created successfully', order, 201);

    // res.status(201).json({ order });
  } catch (err) {
    console.log({ err });
    return next(new ErrorResponse(err.message, 400));
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await OrderService.getAll();
    return SuccessResponse(res, 'Orders retrieved successfully', orders, 200);
  } catch (err) {
    console.log({ err });
    return next(new ErrorResponse(err.message, 400));
  }
};

export const getSingleOrder = async (req, res, next) => {
  try {
    const order = await OrderService.getById(req.params.id);

    return SuccessResponse(res, 'Order retrieved successfully', order, 200);
  } catch (err) {
    console.log({ err });
    return next(new ErrorResponse(err.message, 400));
  }
};

export const getUserOrders = async (req, res, next) => {
  try {
    const orders = await OrderService.getByUserId(req.user.id);
    // res.status(200).json({ orders });
    return SuccessResponse(
      res,
      'User orders retrieved successfully',
      orders,
      200
    );
  } catch (err) {
    console.log({ err });
    return next(new ErrorResponse(err.message, 400));

    // return res.status(400).json({ error_msg: err.message });
  }
};

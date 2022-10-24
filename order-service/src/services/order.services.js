import AppDataSource from '../config/datasource.js';
import OrderModel from '../model/Order.js';
const orderRepo = AppDataSource.getRepository('Order');
const orderModelRepo = AppDataSource.getRepository('OrderModel');
const OrderService = {
  init: () => {
    return new OrderModel();
  },
  getAll: () => {
    return orderModelRepo.find();
  },
  getById: (id) => {
    return AppDataSource.getRepository('OrderModel')
      .createQueryBuilder('order')
      .innerJoinAndSelect('order.order_details', 'orders')
      .where('order.id = :id', { id })
      .getOne();
  },
  getByUserId: (userId) => {
    return orderModelRepo.findBy({
      userId,
    });
  },
  create: (order) => {
    return orderRepo.manager.save(order);
  },

  updateOrderDetails: async (order, orderDetailsId) => {
    return await AppDataSource.createQueryBuilder()
      .relation(OrderModel, 'order_details')
      .of(order)
      .add(orderDetailsId);
  },
  update: async (id, updateValues) => {
    await AppDataSource.createQueryBuilder()
      .update(OrderModel)
      .set(updateValues)
      .where('id = :id', { id })
      .execute();
  },
};

export default OrderService;

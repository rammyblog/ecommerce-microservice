export default class OrderDetailModel {
  constructor(id, productId, orderId, price, quantity) {
    this.id = id;
    this.productId = productId;
    this.orderId = orderId;
    this.price = price;
    this.quantity = quantity;
  }
}

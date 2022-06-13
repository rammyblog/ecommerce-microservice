export default class OrderModel {
  constructor(
    id,
    userId,
    address,
    paid,
    phoneNumber,
    amount,
    status,
    reference,
    created_at,
    updated_at,
    order_details
  ) {
    this.id = id;
    this.userId = userId;
    this.paid = paid;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.amount = amount;
    this.status = status;
    this.reference = reference;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.order_details = order_details;
  }
}

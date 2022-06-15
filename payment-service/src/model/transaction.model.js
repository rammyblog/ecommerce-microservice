export default class TransactionModel {
  constructor(
    id,
    userId,
    orderId,
    paid,
    amount,
    reference,
    created_at,
    updated_at
  ) {
    this.id = id;
    this.userId = userId;
    this.orderId = orderId;
    this.paid = paid;
    this.amount = amount;
    this.reference = reference;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

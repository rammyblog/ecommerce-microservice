const transformCartItems = (cart) => {
  const result = [];
  cart.forEach((item) => {
    let { id: productId, sellingPrice: price, qty: quantity } = item;
    let transformCartItem = {
      productId: String(productId),
      price: String(price),
      quantity: String(quantity),
    };
    result.push(transformCartItem);
  });
  return result;
};

export default transformCartItems;

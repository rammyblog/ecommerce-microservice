import Joi from '@hapi/joi';

export const createOrderValidation = (data) => {
  let cartItems = Joi.object().keys({
    productId: Joi.string().required(),
    price: Joi.string().required(),
    quantity: Joi.string().required(),
  });

  const schema = Joi.object({
    cart: Joi.array().items(cartItems).required(),
    address: Joi.string().required(),
    phoneNumber: Joi.string().required(),
  });
  return schema.validate(data);
};

import Joi from '@hapi/joi';

export const initializeTransactionValidation = (data) => {
  const schema = Joi.object({
    amount: Joi.string().required(),
    orderId: Joi.string().required(),
  });
  return schema.validate(data);
};

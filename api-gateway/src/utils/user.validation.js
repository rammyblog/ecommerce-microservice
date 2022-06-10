import Joi from '@hapi/joi';

export const registerValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(6).required(),
    lastName: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });

  return schema.validate(data);
};

// Login validation
export const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });

  return schema.validate(data);
};

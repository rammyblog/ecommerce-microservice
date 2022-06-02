import Joi from '@hapi/joi'

const productSchema = Joi.object({
  name: Joi.string().required().min(5),
  description: Joi.string().required(),
  sellingPrice: Joi.number().required(),
  costPrice: Joi.number().required(),
  availableQuantity: Joi.number().required(),
  categoryId:Joi.number().required(),
}, ).options({ abortEarly: false })

export default productSchema;








const Joi = require('@hapi/joi')

const categorySchema = Joi.object({
  name: Joi.string().required().min(5),
  description: Joi.string().required(),
}).options({ abortEarly: false })


module.exports = {
  categorySchema,
}
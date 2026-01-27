import Joi from 'joi'

export const addSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .required()
        .messages({
            'string.empty': 'Name trống',
            'any.required': 'Name bắt buộc',
            'string.min': 'Bạn phải nhập tối đa 3 ký tự'
        }),

    fullName: Joi.string()
        .required()
        .messages({
            'string.empty': 'Full name trống'
        }),

    address: Joi.allow('')
})

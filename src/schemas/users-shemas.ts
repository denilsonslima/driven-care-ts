import Joi from 'joi'
import { validateUser } from '../repositories'

export const validateUserShema = Joi.object<validateUser>({
    name: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required()
})
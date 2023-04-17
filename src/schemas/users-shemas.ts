import Joi from 'joi'
import { userSignIn, validateUser } from '../repositories'

export const validateUserShema = Joi.object<validateUser>({
    name: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required()
})

export const userSignInSchema = Joi.object<userSignIn>({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})
import { Router } from "express";
import usersController from "../controllers/users-controller.js";
import { validateSchemas } from "../middlewares/validate-schema-middleware.js";
import { userSignInSchema, validateUserShema } from "../schemas/users-shemas.js";

const userRoutes = Router()
userRoutes
.post('/sign-up', validateSchemas(validateUserShema), usersController.createUser)
.post('/sign-in', validateSchemas(userSignInSchema), usersController.userSignIn)

export default userRoutes

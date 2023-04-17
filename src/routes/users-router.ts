import { Router } from "express";
import usersController from "../controllers/users-controller.js";
import { validateSchemas } from "../middlewares/validate-schema-middleware.js";
import { validateUserShema } from "../schemas/users-shemas.js";

const userRoutes = Router()
userRoutes
.post('/sign-up', validateSchemas(validateUserShema), usersController.createUser)

export default userRoutes

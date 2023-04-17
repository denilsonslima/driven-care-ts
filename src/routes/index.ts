import { Router } from "express";
import userRoutes from "./users-router.js";

const routes = Router();
routes.use('/users', userRoutes);

export default routes;

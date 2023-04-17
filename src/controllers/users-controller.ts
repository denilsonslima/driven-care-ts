import { Response, Request, NextFunction } from "express";
import httpStatus from "http-status";
import { validateUser } from "../repositories";
import authService from "../services/users-service.js";

async function createUser(req: Request, res: Response, next: NextFunction) {
  const data = req.body as validateUser;
  try {
    await authService.createUser(data);
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    next(error)
  }
}

export default {
    createUser
}
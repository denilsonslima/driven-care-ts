import { Response, Request, NextFunction } from "express";
import httpStatus from "http-status";
import { userSignIn, validateUser } from "../repositories";
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

async function userSignIn(req: Request, res: Response, next: NextFunction) {
  const data = req.body as userSignIn
  try {
    const token = await authService.userSignIn(data)
    res.status(httpStatus.OK).send({token})
  } catch (error) {
    next(error)
  }
}

export default {
    createUser,
    userSignIn
}
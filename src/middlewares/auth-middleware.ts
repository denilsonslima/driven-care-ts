import { NextFunction, Request, Response } from "express";
import usersRepositories from "../repositories/users-repositories.js";

async function authMiddleware(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  try {
    if (!authorization) return res.sendStatus(401);

    const [Bearer, token] = authorization.split(" ");

    if (!Bearer || !token || Bearer !== "Bearer") return res.sendStatus(401);

    const user = await usersRepositories.findByToken(token);
    if (!user) return res.sendStatus(401);

    req.userId = user.id;
    next();
  } catch (error) {
    res.status(500).send();
  }
}

export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
  userId: number;
};

export default authMiddleware;

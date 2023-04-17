import { NextFunction, Request, Response } from "express";
import httpStatus from 'http-status'
import { ObjectSchema } from "joi";

export function validateSchemas(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const {error} = schema.validate(req.body, { abortEarly: false });

    if(error) {
        return res.status(httpStatus.BAD_REQUEST).json({message: error.details.map(e => e.message)})
    }

    next()
  };
}

import { NextFunction, Request, Response } from "express";

export function validatePathParam(request: Request, response: Response, next: NextFunction) {
  const { id } = request.params;
  if(isNaN(Number(id))) {
    response.status(400).json({ error: `Invalid parameter: ${id}. Parameter must be an integer.` })
    return;
  }
  next();
}
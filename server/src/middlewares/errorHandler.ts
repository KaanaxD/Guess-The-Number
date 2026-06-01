import { Request,Response,NextFunction } from "express";
import { success, ZodError } from "zod";

interface Err extends Error{
  status: number
}

interface ResBody {
  success: boolean;
  message: any;
}

export function createError(status:number, message:string) {
  const error = new Error(message) as Err;
  error.status = status;
  return error;
}

export function errorHandler(err:Err |ZodError, req:Request, res:Response<ResBody>, next:NextFunction) {
  if(err instanceof ZodError){
    let msg = err.issues[0]?.message
    return res.status(400).json({
      success: false,
      message: msg
    })
  }
  return res.status(err.status || 500).json({
    success: false,
    message: err.message || "internal server error",
  });
}
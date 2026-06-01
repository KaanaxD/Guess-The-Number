import * as service from "../services/authService";
import { z }from "zod";
import { NextFunction,Request,Response } from "express";

const inputSchema = z.object({
  username: z.string().min(1,"Username harus diisi"),
  password: z.string().min(8,"Password minimal 8 karakter"),
});

type ReqBody = z.infer<typeof inputSchema>;

export async function register(req:Request<{},{},ReqBody>, res:Response, next:NextFunction) {
  try {
    let input = await inputSchema.parseAsync(req.body);
    
    await service.makeAccount(input.username, input.password);
    res.json({
      succes: true,
      message: "Akun berhasil dibuat",
    });    
  } catch (error) {
    next(error)
  }
}

async function login(req:Request<{},{},ReqBody>, res:Response, next:NextFunction) {
  try {
    const input = await inputSchema.parseAsync(req.body)
    let result = await service.verifyAcc(input.username, input.password);
    res.json({
      succes: true,
      message: "Berhasil login",
      result,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = { register, login };

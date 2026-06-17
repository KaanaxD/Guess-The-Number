import * as service from "../services/authService";
import { z }from "zod";
import { NextFunction,Request,Response } from "express";

const inputSchema = z.object({
  username: z.string().min(1,"Username harus diisi"),
  password: z.string().min(8,"Password minimal 8 karakter"),
});

export type ReqBody = z.infer<typeof inputSchema>;

export async function register(req:Request<{},{},ReqBody>, res:Response<ResBody>, next:NextFunction) {
  try {
    let input = await inputSchema.parseAsync(req.body);
    
    await service.makeAccount(input.username, input.password);
    res.json({
      success: true,
      message: "Akun berhasil dibuat",
    });    
  } catch (error) {
    next(error)
  }
}

export async function login(req:Request<{},{},ReqBody>, res:Response<ResBody>, next:NextFunction) {
  try {
    const input = await inputSchema.parseAsync(req.body)
    let data = await service.verifyAcc(input.username, input.password);
    res.json({
      success: true,
      message: "Berhasil login",
      data: data,
    });
  } catch (error) {
    next(error);
  }
}


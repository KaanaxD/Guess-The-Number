import { Request, Response, NextFunction } from "express";
import * as service from "../services/gameService"
import { createError } from "../middlewares/errorHandler"
import { rng } from "../utils/rng"
import { z } from "zod"

const inputSchema = z.object({
  guess: z.number("guess berupa angka"),
});

type GuessBody = z.infer<typeof inputSchema>

export async function startNewGame(req:Request, res:Response<ResBody>, next:NextFunction) {
  let target = rng();
  let check = await service.historyCheck(req.user.id);
  if (!check) {
    return next(createError(404, "masih ada game yang belum diselesaikan"));
  }

  await service.setNewGame(req.user.id, target);
  res.json({
    success: true,
    message: "game dimulai",
    data:{
      target_number: target,
    }
  });
}

export async function checkGame(req:Request<{},{},GuessBody>, res:Response<ResBody>, next:NextFunction) {
  try {
    let input = await inputSchema.parseAsync(req.body);
    let result = await service.guessCheck(req.user.id, input.guess);
    res.json(result);
  } catch (error) {
    next(error);
  }
}

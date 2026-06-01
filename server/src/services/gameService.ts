import * as query from "../models/gameModels";
import { gameResultQuery } from "../models/gameModels";

type Result = Promise<{
  success: boolean
  correct: boolean
  message: string
  status: string;
  data?: GameResult | undefined
} | undefined>;

export async function setNewGame(user_id: number, rng: number) {
  await query.setGameQuery(user_id, rng, 0, false);
}

export async function historyCheck(id: number) {
  let done = await query.getLatestGameQuery(id);
  if (done.length == 0) {
    return true;
  } else if (done[0].is_finished == true) {
    return true;
  }
  return false;
}

export async function guessCheck(id: number, guess: number): Result {
  let target = await query.getLatestGameQuery(id);
  if (!target.length || target[0].is_finished) {
    throw {
      status: 404,
      success: false,
      message: "game belum dimulai",
    };
  }
  if (target[0].target_number != guess) {
    let status;
    if (target[0].target_number > guess) {
      status = "kekecilan";
    } else {
      status = "kebesaran";
    }
    await query.setGameQuery(
      id,
      target[0].target_number,
      target[0].attempt + 1,
      false,
    );
    return {
      success: true,
      correct: false,
      message: "tebakan salah",
      status: status,
    };
  }
  await query.setGameQuery(
    id,
    target[0].target_number,
    target[0].attempt + 1,
    true,
  );
  let result = await gameResultQuery(id, target[0].attempt + 1);
  return {
    success: true,
    correct: true,
    message: "tebakan benar",
    status: "benar",
    data: {
      ...result[0]
    }
  };
}
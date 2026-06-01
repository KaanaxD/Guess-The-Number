import { pool } from "../config/db";

export async function setGameQuery(id, target, attempt, status) {
  let result = await pool.query(
    `INSERT INTO game (user_id,target_number,attempt,is_finished) VALUES ($1,$2,$3,$4) RETURNING *`,
    [id, target, attempt, status],
  );
  return result.rows;
}

export async function getLatestGameQuery(id) {
  let result = await pool.query(
    `SELECT id,target_number,attempt,is_finished FROM game WHERE user_id = $1 ORDER BY id DESC LIMIT 1`,
    [id],
  );
  return result.rows;
}
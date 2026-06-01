import { pool } from "../config/db";

interface GameResult{
  rank: string|number
  attempt: number
}

export async function setGameQuery(id: number, target: number, attempt: number, status: boolean): Promise<void> {
  await pool.query(
    `INSERT INTO game (user_id,target_number,attempt,is_finished) VALUES ($1,$2,$3,$4)`,
    [id, target, attempt, status],
  );
}

export async function getLatestGameQuery(id: number) {
  let result = await pool.query(
    `SELECT id,target_number,attempt,is_finished FROM game WHERE user_id = $1 ORDER BY id DESC LIMIT 1`,
    [id],
  );
  return result.rows
}

export async function gameResultQuery(id: number, attempt: number): Promise<GameResult[]> {
  let result = await pool.query(
    `WITH inserted AS (
    INSERT INTO leaderboard (user_id, attempts)
    VALUES ($1, $2)
    RETURNING attempts
    )
    SELECT
        i.attempts,
        COUNT(DISTINCT best_attempt) + 1 AS rank
    FROM inserted i
    LEFT JOIN (
        SELECT MIN(attempts) AS best_attempt
        FROM leaderboard
        GROUP BY user_id
    ) lb
    ON lb.best_attempt < i.attempts
    GROUP BY i.attempts;`,
    [id, attempt],
  );
  return result.rows;
}
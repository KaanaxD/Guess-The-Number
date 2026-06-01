import { pool } from "../config/db";

export async function getLeaderboardQuery(): Promise<Leaderboard[]> {
  let result = await pool.query<Leaderboard>(
    `SELECT
     DENSE_RANK() OVER (
        ORDER BY MIN(leaderboard.attempts) ASC
    ) AS rank,
    users.username,
    MIN(leaderboard.attempts) AS best_attempt
    FROM users
    JOIN leaderboard
    ON leaderboard.user_id = users.id
    GROUP BY users.username;`,
  );
  return result.rows;
}

export async function setLeaderboardQuery(id: number, attempt: number) {
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
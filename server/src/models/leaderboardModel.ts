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
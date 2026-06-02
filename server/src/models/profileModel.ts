import { pool } from "../config/db";

interface Profile{
  username: string
  best_attempt: number|string;
}

export async function getProfileQuery(nama:string) : Promise<Profile> {
  let result = await pool.query(
    `SELECT users.username,COALESCE(MIN(leaderboard.attempts),-1) AS best_attempt
FROM users LEFT JOIN leaderboard ON users.id = leaderboard.user_id WHERE users.username = $1
GROUP BY users.username`,
    [nama],
  );
  return result.rows[0];
}
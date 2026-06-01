const db = require("../config/db");

async function getProfileQuery(nama) {
  let result = await db.query(
    `SELECT users.username,COALESCE(MIN(leaderboard.attempts),-1) AS best_attempt
FROM users LEFT JOIN leaderboard ON users.id = leaderboard.user_id WHERE users.username = $1
GROUP BY users.username`,
    [nama],
  );
  return result.rows[0];
}

module.exports = { getProfileQuery };

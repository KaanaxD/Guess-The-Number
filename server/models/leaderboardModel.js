let db = require("../config/db");

async function getLeaderboardQuery() {
  let result = await db.query(
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

module.exports = getLeaderboardQuery;

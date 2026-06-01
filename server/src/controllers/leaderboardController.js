import { getLeaderboardQuery } from "../models/leaderboardModel";

export async function getLeaderboard(req,res,next){
    let leaderboard = await getLeaderboardQuery();
    res.json({
        success: true,
        leaderboard: leaderboard
    })
}
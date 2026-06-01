import { getLeaderboardQuery } from "../models/leaderboardModel";

export async function leaderboard() {
    const data = await getLeaderboardQuery()
    return data
}
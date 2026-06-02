import { Request,Response,NextFunction } from "express";
import { getLeaderboardQuery } from "../models/leaderboardModel";

export async function getLeaderboard(req:Request,res:Response<ResBody>,next:NextFunction){
    let leaderboard = await getLeaderboardQuery();
    res.json({
        success: true,
        message: "leaderboard",
        data: leaderboard
    })
}
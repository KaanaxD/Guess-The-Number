import express from "express"
import { getLeaderboard } from "../controllers/leaderboardController"
export let leaderboardRouter = express.Router()

leaderboardRouter.get("/",getLeaderboard)


let controller = require("../controllers/leaderboardController")
let express = require("express")
export let leaderboardRouter = express.Router()

leaderboardRouter.get("/",controller.getLeaderboard)


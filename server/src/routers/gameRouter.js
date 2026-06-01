let controller = require("../controllers/gameController")
let express = require("express")
export let gameRouter = express.Router()

gameRouter.get("/start",controller.startNewGame)
gameRouter.post("/check",controller.checkGame)


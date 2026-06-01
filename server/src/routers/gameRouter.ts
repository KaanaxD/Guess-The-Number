import express from "express"
import { checkGame, startNewGame } from "../controllers/gameController"
export let gameRouter = express.Router()

gameRouter.get("/start",startNewGame)
gameRouter.post("/check",checkGame)


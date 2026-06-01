import express from "express"
import { getProfile } from "../controllers/profileController"
export let profileRouter = express.Router()

profileRouter.get("/",getProfile)

 
let controller = require("../controllers/profileController")
let express = require("express")
export let profileRouter = express.Router()

profileRouter.get("/",controller.getProfile)


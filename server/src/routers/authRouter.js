let controller = require("../controllers/authController")
let express = require("express")
export let authRouter = express.Router()

authRouter.post("/register",controller.register)
authRouter.post("/login",controller.login)


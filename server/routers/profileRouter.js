let controller = require("../controllers/profileController")
let express = require("express")
let router = express.Router()

router.get("/",controller.getProfile)

module.exports = router
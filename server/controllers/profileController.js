const { success } = require("zod")
const { createError } = require("../middlewares/errorHandler")
let query = require("../models/profileModel")

async function getProfile(req,res,next){
    let username = req.user.username
    if(!username){
        return next(createError(401,"blm login"))
    }
    let result = await query.getProfileQuery(username)
    console.log(result)
    res.json({
        success: true,
        message: "noh profil",
        profil: result
    })
}

module.exports = {getProfile} 
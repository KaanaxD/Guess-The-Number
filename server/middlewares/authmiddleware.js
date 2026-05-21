let jwt = require("jsonwebtoken")
let {createError} = require("../middlewares/errorHandler")

function authmiddleware(req,res,next){
    let token = req.headers.authorization
    if(!token){
        return next(createError(401 ,"belum login"))
    }
    let bearerToken = req.headers.authorization.split(" ")[1]
    let check = jwt.verify(bearerToken,process.env.JWT_SECRET)
    if(!check){
        return next(createError(401,"invalid token"))
    } else {
        req.user = check
        next()
    }
}

module.exports = authmiddleware
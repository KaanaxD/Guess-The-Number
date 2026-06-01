import { NextFunction,Request,Response } from "express";
let jwt = require("jsonwebtoken")
let {createError} = require("./errorHandler")

export function authmiddleware(req:Request,res:Response,next:NextFunction){
    let token = req.headers.authorization
    if(!token){
        return next(createError(401 ,"belum login"))
    }
    let bearerToken = token.split(" ")[1]
    let check = jwt.verify(bearerToken,process.env.JWT_SECRET)
    if(!check){
        return next(createError(401,"invalid token"))
    } else {
        req.user = check
        next()
    }
}
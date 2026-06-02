import { Request,Response,NextFunction } from "express";
import { createError } from "../middlewares/errorHandler"
import { getProfileQuery } from "../models/profileModel";


export async function getProfile(req:Request,res:Response<ResBody>,next:NextFunction){
    let username = req.user.username
    if(!username){
        return next(createError(401,"blm login"))
    }
    let result = await getProfileQuery(username)
    res.json({
        success: true,
        message: "profil",
        data: result
    })
}
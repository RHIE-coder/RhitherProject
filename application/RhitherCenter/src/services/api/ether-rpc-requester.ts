import { Request, Response, NextFunction } from "express";
import * as axios from "axios";

export function middle(req:Request, res:Response, next:NextFunction){
    console.log("middleware");
    next();
}

export function mainFunc(req:Request, res:Response){
    res.send("hello");
}
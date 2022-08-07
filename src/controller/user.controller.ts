import { Request,Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";
import logger from "../utils/logger";

export async function createUserHandler(req:Request<{},{},CreateUserInput["body"]>,res:Response){
    try{
        const user = await createUser(req?.body)
    }catch(e:any){
        logger.error("Error Creating User: " + e)
        return res.status(400).json("An Error Ocurred Creating User: " + e);
    }
}
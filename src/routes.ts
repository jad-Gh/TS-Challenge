import { Express,Request,Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validate from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";

function routes (app:Express) {
    app.get("/healthcheck",(req: Request, res: Response)=>{
        res.status(200).json("Health Check Passed")
    })

    app.post("/api/users",validate(createUserSchema),createUserHandler)
}

export default routes;
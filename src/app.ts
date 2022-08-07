import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";

const app = express()
const port = config.get<number>("port")

app.listen(port, async ()=>{
    logger.info("Server up and running on port http://localhost:3000")


    await connect();
})
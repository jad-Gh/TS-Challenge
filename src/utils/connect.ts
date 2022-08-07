import mongoose from "mongoose";
import config from "config";
import logger from "./logger";


async function connect (){
    const dbUri = config.get<string>("dbUri")
    return mongoose.connect(dbUri)
    .then(()=>{
        logger.info("Connected to mongoose DB")
    })
    .catch((error)=>{
        logger.error("DB connection error" + error);
        process.exit()
    })
}

export default connect;
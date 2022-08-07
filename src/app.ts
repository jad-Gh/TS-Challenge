import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
const port = config.get<number>("port")

app.listen(port, async ()=>{
    logger.info("Server up and running on port http://localhost:3000")
    await connect();
    routes(app);
})
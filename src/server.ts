import express, {Request,Response} from "express"
import path from "path"
import dotenv from "dotenv"


import apiRouter from "./routes/api"

dotenv.config();
const server = express();

server.use(express.urlencoded({ extended: true }))
server.use(express.static("./public"))

server.use("/" , apiRouter)

server.use("/" , (req: Request, res: Response) => {
    res.send("Endpoint Nao Existe")
})


server.listen(process.env.PORT || 2000)
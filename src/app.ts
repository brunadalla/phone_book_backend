import express from "express"
import cors from 'cors'
import "express-async-errors"
import "reflect-metadata"

import { appRoutes } from "./routes"
import handleErrorMiddleware from "./middlewares/handleError.middleware"

const app = express()
app.use(express.json())
app.use(cors({
    origin: '*'
}));

appRoutes(app)
app.use(handleErrorMiddleware)

export default app

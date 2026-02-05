
import { connectMongoDB } from "./config/mongoDB.config.js"
import express from 'express'
import authRouter from "./routes/auth.router.js"
import cors from 'cors'
import workspaceRouter from "./routes/workspace.router.js"
import { checkDB } from "./config/mysql.config.js"

connectMongoDB()
checkDB()

const app = express()

app.use(cors())

app.use(express.json())



app.use("/api/auth", authRouter)
app.use("/api/workspace", workspaceRouter)

app.listen(
    8082,
    () => {
        console.log('Nuestra app se escucha en el puerto 8082')
    }
)

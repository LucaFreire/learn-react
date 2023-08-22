import express from "express"
import "./loadEnv.mjs"
import connectDB from "./startup/db.mjs"
import startupRoutes from './startup/routes.mjs'

const PORT = process.env.PORT || 3000
const app = express()

connectDB()
startupRoutes(app)

app.listen(PORT, () => {
    console.log("Running at http://localhost:" + PORT)
})
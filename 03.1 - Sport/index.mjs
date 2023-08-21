import express from "express"
import "./loadEnv.mjs"
import sports from "./controllers/sportsController.mjs"
import "./startup/db.mjs"

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())

app.use("/sports", sports)

app.listen(PORT, () => {
    console.log("Running at http://localhost:" + PORT)
})
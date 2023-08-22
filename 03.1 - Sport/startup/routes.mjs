import express from "express";
import Sports from "../routes/sports.mjs";
import bodyParser from "body-parser";

function startupRoutes(app) {
    app.use('/sports', Sports)
    app.use(express.json())
    app.use(bodyParser)
}

export default startupRoutes
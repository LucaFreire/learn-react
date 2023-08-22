import express from "express";
import SportsController from "../routes/sports.mjs";
import bodyParser from "body-parser";

function startupRoutes(app) {
    app.use('/sports', SportsController)
    app.use(express.json())
    app.use(bodyParser)
}

export default startupRoutes
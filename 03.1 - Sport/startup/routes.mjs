import express from "express";
import SportsController from "../routes/sports.mjs";

function startupRoutes(app) {
    app.use(express.json());
    app.use('/sports', SportsController);
}

export default startupRoutes
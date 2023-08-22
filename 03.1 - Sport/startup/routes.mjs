import express from "express";
import sports from "../model/sports.mjs";
import bodyParser from "body-parser";

function StartupRoutes(app) {
    app.use(express.json())
    app.use(bodyParser)
    app.use('/sport', sports)
}

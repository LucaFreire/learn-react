import express from "express";
import SportsController from "../routes/sports.mjs";

function startupRoutes(app) {
<<<<<<< HEAD
    app.use('/sports', SportsController);
    app.use(express.json());
    app.use(bodyParser);
=======
    app.use(express.json());
    app.use('/sports', SportsController);
>>>>>>> 5daa17dcbb7b7e3aae5d80486b2de1b4cd7ef092
}

export default startupRoutes
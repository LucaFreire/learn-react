import express from "express";
import SportsController from '../controllers/sportsController.mjs';
const router = express.Router();

router
    .get('/get', SportsController.getAll)
    .post('/post', SportsController.create)

export default router
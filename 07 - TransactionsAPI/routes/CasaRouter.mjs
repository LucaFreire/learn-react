import express from "express";
import CasaController from "../controller/CasaController.mjs";
const router = express.Router();

router
    .post('/create', CasaController.create)
    .get('/getAll', CasaController.getAll)
    .get('/getById', CasaController.getById)

export default router;
import express from 'express';
import CasaController from '../controller/CasaController.mjs';
import TransactionRouter from '../routes/TransactionRouter.mjs';

function StartupRoutes(app) {
    app.use(express.json());
    app.use('/Casa', CasaController);
    app.use('/Transaction', TransactionRouter);
}

export default StartupRoutes;
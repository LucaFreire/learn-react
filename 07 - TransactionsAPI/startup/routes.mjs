import express from 'express';
import CasaController from '../controller/CasaController.mjs';
import TransactionController from '../controller/TransactionController.mjs';

function StartupRoutes(app) {
    app.use(express.json());
    app.use('/Casa', CasaController);
    app.use('/Transaction', TransactionController);
}

export default StartupRoutes;
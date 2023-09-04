import express from "express";
import walletRoute from '../routes/WalletRoutes.mjs';

function startupRoutes(app) {
    app.use(express.json());
    app.use('/wallet', walletRoute);
}

export default startupRoutes;
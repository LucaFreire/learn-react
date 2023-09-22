import express from 'express';
import RecordRouter from '../routes/RecordRouter.mjs'

function startupRoutes(app) {
    app.use(express.json());
    app.use('/Gravadora', RecordRouter);
}

export default startupRoutes;
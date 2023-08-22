import express from 'express';
import userRouter from '../routes/userRouter.mjs';
import bodyParser from 'body-parser';

function StartupRoute(app) {
    app.use(express.json());
    app.use(bodyParser.json());
    app.use('/users', userRouter);
}

export default StartupRoute
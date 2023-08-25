import express from 'express';
import userRouter from '../routes/userRouter.mjs';
import authRouter from '../routes/authRouter.mjs'

function StartupRoute(app) {
    app.use(express.json());
    app.use('/users', userRouter);
    app.use('/auth', authRouter);
}

export default StartupRoute
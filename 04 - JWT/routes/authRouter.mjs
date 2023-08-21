import express from 'express';
import authController from '../controller/AuthController.mjs';
const router = express.Router();

router
    .post('/register', authController.register)
    .post('/login', authController.login);

export default router;
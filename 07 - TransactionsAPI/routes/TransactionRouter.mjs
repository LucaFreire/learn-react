import express from 'express';
import TransactionController from '../controller/TransactionController.mjs';
const router = express.Router();

router
    .get('getAll', TransactionController.getAll)
    .post('create', TransactionController.create)

export default router;
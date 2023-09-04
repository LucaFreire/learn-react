import express from 'express';
import WalletController from '../controller/WalletContoroller.mjs';

const router = express.Router();

router
    .post('/create', WalletController.create)
    .delete('/deleteById', WalletController.deleteById)
    .post('/findById', WalletController.findById)
    .put('/update', WalletController.update)
    .get('/getAll', WalletController.getAll)

export default router;
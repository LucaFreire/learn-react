import express from 'express';
import RecordController from '../controllers/RecordController.mjs'

const router = express.Router();

router
    .get('/getAll', RecordController.getAll)
    .post('/getById', RecordController.findById)
    .post('/create', RecordController.create)
    .put('/update', RecordController.update)
    .delete('/deleteById', RecordController.deleteById)

export default router;
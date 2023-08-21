import express  from "express";
import UsersController from '../controller/userController.mjs';
const router = express.Router();

router
    .get('/get', UsersController.getAll)
    .get('/get/:Id', UsersController.getById)
    .post('/get', UsersController.create);

export default router;
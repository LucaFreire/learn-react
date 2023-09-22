import express from "express";
import './startup/loadEnv.mjs';
import startupDB from './startup/startupDB.mjs'
import startupRoutes from "./startup/startupRoutes.mjs";

const PORT = process.env.PORT || 3000;
const app = express();

startupDB();
startupRoutes(app);

app.listen(PORT, () => {
    console.log(`Running at: http://localhost:${PORT}`);
});

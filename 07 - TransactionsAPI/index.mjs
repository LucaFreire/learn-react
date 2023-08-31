import express from 'express';
import './startup/loadEnv.mjs';
import ConnectDB from './startup/db.mjs';
import StartupRoutes from './startup/routes.mjs';

const PORT = process.env.PORT || 3000;
const app = express();

ConnectDB();
StartupRoutes(app);

app.listen(PORT, () => {
    console.log('Running at http://localhost:' + PORT);
});
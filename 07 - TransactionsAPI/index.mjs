import express from 'express';
import './startup/loadEnv.mjs';
import ConnectDB from './startup/db.mjs';
import StartupRoutes from './startup/routes.mjs';
import cors from 'cors';

const PORT = process.env.PORT || 3000;
const app = express();

ConnectDB();
StartupRoutes(app);

app.use(cors({ 
    origin: '*' 
}));

app.listen(PORT, () => {
    console.log('Running at http://localhost:' + PORT);
});
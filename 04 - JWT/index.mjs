import express from 'express';
import cors from 'cors';
import "./config/loadEnv.mjs"
import StartupDB from './startup/db.mjs';
import StartupRoute from './startup/routes.mjs';

const app = express();
app.use(cors({
    origin: "*" // * para responder de todos endpoints do front-end.
}));

const PORT = process.env.PORT || 4000;
StartupDB();
StartupRoute(app);

app.listen(PORT, () =>
    console.log(`Server is runnig at: http://localhost:${PORT}`));

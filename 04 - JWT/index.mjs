import express from 'express';
import routes from './routes';
import cors from 'cors';
import "./config/loadEnv.mjs"

const app = express();
app.use(cors({
    origin: "*" // * para responder de todos endpoints do front-end.
}));

require('./startup/db');
require('./startup/routes')(app);

const PORT = process.env.PORT || 4000;
routes(app);

const server = app.listen(PORT, () => 
    console.log(`Server is runnig at: http://localhost:${PORT}`));

export default server;
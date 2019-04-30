import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import logger from './server/config/winston';
import PORT from './server/config/port';
import './server/helpers/checkEnv';
import router from './server/router/routers';

dotenv.config();

const BASE_URI = '/api/v1';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(BASE_URI, router);

app.get('/', (req, res) => {
  res.json({
    message: 'App is life',
  });
});

app.use((err, req, res, next) => {
  res.status(500).json({
    error: err,
    message: 'Internal server error!',
  });
});

app.listen(PORT, () => {
  logger.info(`Server now listening for request at port ${PORT}`);
});

export default app;

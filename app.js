import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import logger from './server/config/winston';
import PORT from './server/config/port';
import './server/helpers/checkEnv';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    message: 'App is life',
  });
});

app.listen(PORT, () => {
  logger.info(`Server now listening for request at port ${PORT}`);
});

export default app;

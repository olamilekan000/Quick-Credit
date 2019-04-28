import logger from '../config/winston';

const checkEnv = (() => {
  if (process.env.NODE_ENV === 'test') {
    logger.transports.forEach(t => (t.silent = true));
  }
})();

export default checkEnv;

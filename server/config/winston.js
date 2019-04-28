import appRoot from 'app-root-path';
import winston from 'winston';

// define custom settings for each transport file (file,console);
const options = {
  file: {
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

// instantiate a new Winston Logger with the settings defined above
const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

// create a stream object with a 'write' function
logger.stream = {
  write(message) {
    /** use the 'info' log level so the output will be
        picked up by both transports (file and console) * */
    logger.info(message);
  },
};

export default logger;

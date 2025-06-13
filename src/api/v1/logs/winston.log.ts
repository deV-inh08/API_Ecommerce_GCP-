import winston from 'winston'

class Logger {
  private static instance: Logger
  private logger: winston.Logger
  private constructor() {
    this.logger = winston.createLogger({

    })
  }
  // static getInstance(): winston.Logger {
  //   if (!Logger.instance) {
  //     Logger.instance = winston.createLogger({
  //       format: winston.format.combine(
  //         winston.format.timestamp(),
  //         winston.format.errors({ stack: true }),
  //         winston.format.json()
  //       ),
  //       transports: [
  //         new winston.transports.Console({
  //           format: winston.format.combine(winston.format.colorize(), winston.format.simple())
  //         })
  //       ]
  //     })
  //   }
  //   return Logger.instance
  // }
}

export default Logger

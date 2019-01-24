import { Logger } from '@nestjs/common';

export function httpLoggerMiddleware(req, res, next) {
  console.log('Incoming: ' + req.url, JSON.stringify(req.headers));
  next();
}
import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import {get} from 'lodash';
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    console.log('test:', exception);
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = typeof exception.getStatus === 'function' ? exception.getStatus() : 403;

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: get(exception, ['message', 'error'], null) || get(exception, ['message']),
        response: get(exception, ['response', 'error'], null),
      });
  }
}
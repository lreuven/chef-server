import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { httpLoggerMiddleware } from './middleware/httpLogger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });

  app.use(httpLoggerMiddleware);
  app.use(compression());

  await app.listen(3000);
}
bootstrap();

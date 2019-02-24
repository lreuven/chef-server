import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from 'compression';
import { httpLoggerMiddleware } from './middleware/http-logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
    cors: true
  });

  app.use(httpLoggerMiddleware);
  app.use(compression());
  console.log('app.listen(3000)');
  await app.listen(3000);
}
bootstrap();
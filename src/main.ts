import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import config from 'config';

async function bootstrap() {
  // const serverConfig = config.get('server');

  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  const port = 3000;

  await app.listen(port);
  logger.log(`Application listening on ${port}`);
}
bootstrap();

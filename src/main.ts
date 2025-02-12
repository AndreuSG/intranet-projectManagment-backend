import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { LOG } from './shared/utils/log';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = process.env.PORT || 3000;

  try {
    await app.listen(port);
    LOG.log(
      `\x1b[32m======\x1b[0m Service start. Port: \x1b[34m${port} \x1b[0m - Environment: \x1b[34m${process.env.NODE_ENV?.toUpperCase()} \x1b[32m======\x1b[0m`,
    );
  } catch (ex) {
    LOG.log(
      `\x1b[31m======\x1b[0m Error starting application \x1b[31m======\x1b[0m`,
    );
    LOG.error(ex);
    process.exit(1);
  }
}
bootstrap();

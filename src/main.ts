import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //recibir solo los DTO
    }),
  );
  await app.listen(4000);
  console.log('Server on port 4000');
}
bootstrap();

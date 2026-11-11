import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
    .setTitle('Product API')
    .setDescription('The product API description')
    .setVersion('1.0')
    .addTag('product')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  const Configservice = app.get(ConfigService);
  const port = Number(Configservice.get<string>('PORT') ?? '3000');

  await app.listen(port);
}
await bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // This huge limit be removed later. Using it for bulk data collection currently.
  const expressApp: NestExpressApplication = app.getHttpAdapter().getInstance();
  expressApp.use(express.json({ limit: '30mb' }));

  app.enableCors({
    origin: 'http://localhost:5173', // Allow only your frontend to access the API (or use '*' to allow all)
    methods: 'GET,POST,PUT,DELETE', // You can adjust this depending on what methods you use
    allowedHeaders: 'Content-Type, Authorization', // Allow specific headers
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

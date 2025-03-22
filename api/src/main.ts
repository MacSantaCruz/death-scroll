import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', // Allow only your frontend to access the API (or use '*' to allow all)
    methods: 'GET,POST,PUT,DELETE', // You can adjust this depending on what methods you use
    allowedHeaders: 'Content-Type, Authorization', // Allow specific headers
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

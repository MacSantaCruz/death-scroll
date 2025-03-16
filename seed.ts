import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { SeederService } from './src/database/seeder.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  try {
    const seederService = app.get(SeederService);
    // You can pass environment from command line args if needed
    const environment = process.argv[2] || 'development';
    await seederService.seedDatabase(environment);
    console.log('Seeding complete!');
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  } finally {
    await app.close();
  }
}

bootstrap();

import { Injectable } from '@nestjs/common';
import { ArticleSeeder } from './seeders/articles.seeder';

@Injectable()
export class SeederService {
  constructor(
    private readonly articleSeeder: ArticleSeeder,
    // Add other seeders here
  ) {}

  async seedDatabase(environment: string = 'development'): Promise<void> {
    console.log(
      `🌱 Starting database seeding for ${environment} environment...`,
    );

    try {
      // Returning articles if needed to seed other data
      const articles = await this.articleSeeder.seed(
        environment === 'testing' ? 10 : 50,
      );

      console.log('✅ Database seeded successfully');
    } catch (error) {
      console.error('❌ Database seeding failed', error);
      throw error;
    }
  }
}

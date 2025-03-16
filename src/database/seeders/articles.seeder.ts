import { Injectable } from '@nestjs/common';
import { ArticlesService } from '../../articles/articles.service';
import { faker } from '@faker-js/faker';
import { Article } from '../../articles/entities/article.entity';
import { Seeder } from '../interfaces/seeder.interface';

@Injectable()
export class ArticleSeeder implements Seeder {
  constructor(private readonly articlesService: ArticlesService) {}

  async seed(count: number = 50): Promise<Article[]> {
    console.log(`Seeding ${count} articles...`);

    // Clear existing data
    await this.articlesService.removeAll();

    const articles: Article[] = [];

    for (let i = 0; i < count; i++) {
      const articleData = {
        name: faker.food.spice(),
        content: faker.lorem.sentences().toLowerCase(),
        publish_date: faker.date.past(),
      };

      const article = await this.articlesService.create(articleData);
      articles.push(article);
    }

    console.log(`✅ Seeded ${count} articles successfully`);
    return articles;
  }
}

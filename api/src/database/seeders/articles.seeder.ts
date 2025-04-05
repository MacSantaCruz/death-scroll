import { Injectable } from '@nestjs/common';
import { ArticlesService } from '../../articles/articles.service';
import { faker } from '@faker-js/faker';
import { Article } from 'types/article';
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
      const articleData: Article = {
        source: {
          id: 'faker',
          name: 'Faker',
        },
        author: faker.person.fullName(),
        title: faker.lorem.sentence({ min: 3, max: 12 }),
        description: faker.lorem.paragraph({ min: 1, max: 3 }),
        url: faker.internet.url(),
        imageURL: faker.image.urlLoremFlickr(),
        publish_date: faker.date.past({
          years: 200,
          refDate: new Date(2000, 0, 1),
        }),
        content: faker.lorem.paragraphs({ min: 1, max: 3 }),
        tags: faker.helpers.arrayElements([
          faker.animal.dog(),
          faker.book.genre(),
          faker.music.genre(),
        ]),
      };

      const article = await this.articlesService.create(articleData);
      articles.push(article);
    }

    console.log(`✅ Seeded ${count} articles successfully`);
    return articles;
  }
}

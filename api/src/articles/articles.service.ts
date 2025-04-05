import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: MongoRepository<Article>,
  ) {}

  async create(createArticleDto: {
    source: { id: string; name: string };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    imageURL: string | null;
    publish_date: Date | null;
    content: string | null;
    tags: string[];
  }): Promise<Article> {
    const article = this.articleRepository.create(createArticleDto);
    return this.articleRepository.save(article);
  }

  async findAll(): Promise<Article[]> {
    return this.articleRepository.find();
  }

  async removeAll(): Promise<void> {
    await this.articleRepository.deleteMany({});
  }

  //   async findOne(id: string): Promise<Article> {
  //     return this.articleRepository.findOne({
  //       where: { _id: new ObjectId(id) },
  //     });
  //   }

  //   async update(
  //     id: string,
  //     updateArticleDto: { name?: string; email?: string; age?: number },
  //   ): Promise<Article> {
  //     await this.articleRepository.update(id, updateArticleDto);
  //     return this.findOne(id);
  //   }

  //   async remove(id: string): Promise<Article> {
  //     const article = await this.findOne(id);
  //     await this.articleRepository.delete(id);
  //     return article;
  //   }
}

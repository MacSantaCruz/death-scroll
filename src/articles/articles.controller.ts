import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { Article } from './entities/article.entity';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  async create(
    @Body()
    createArticleDto: {
      name: string;
      content: string;
      publish_date: Date;
    },
  ): Promise<Article> {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  async findAll(): Promise<Article[]> {
    return this.articlesService.findAll();
  }

  //   @Get(':id')
  //   async findOne(@Param('id') id: string): Promise<Article> {
  //     return this.articlesService.findOne(id);
  //   }

  //   @Put(':id')
  //   async update(
  //     @Param('id') id: string,
  //     @Body() updateArticleDto: { name?: string; email?: string; age?: number },
  //   ): Promise<Article> {
  //     return this.articlesService.update(id, updateArticleDto);
  //   }

  //   @Delete(':id')
  //   async remove(@Param('id') id: string): Promise<Article> {
  //     return this.articlesService.remove(id);
  //   }
}

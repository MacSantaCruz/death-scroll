import {
  Body,
  Controller,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Article } from 'types/article';
import { ArticlesService } from './articles.service';
import { Response } from 'express';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  bulkCreate(@Body() articles: Article[], @Res() response: Response): void {
    // TODO: Validate this more thoroughly. It's temporary though, so kinda whatever.
    if (!Array.isArray(articles)) {
      response
        .status(400)
        .send({ message: 'Invalid input, expected an array.' });
      return;
    }
    if (articles.length === 0) {
      response.status(400).send({ message: 'No articles provided to insert.' });
      return;
    }

    articles.forEach((article) => {
      this.articlesService.create(article).catch((error) => {
        console.error('[ERROR]: Cold not create article.\n', error);
      });
    });

    response.status(201).send({ message: 'Articles stored successfully.' });
  }
}

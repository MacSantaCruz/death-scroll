import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './entities/article.entity';
import { ArticlesService } from './articles.service';
import { ArticlesResolver } from './articles.resolver';
import { ArticlesController } from './articles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  providers: [ArticlesService, ArticlesResolver],
  exports: [ArticlesService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../articles/entities/article.entity';
import { SeederService } from './seeder.service';
import { ArticlesModule } from '../articles/articles.module';
import { ArticleSeeder } from './seeders/articles.seeder';

@Module({
  imports: [TypeOrmModule.forFeature([Article]), ArticlesModule],
  providers: [SeederService, ArticleSeeder],
  exports: [SeederService],
})
export class SeederModule {}

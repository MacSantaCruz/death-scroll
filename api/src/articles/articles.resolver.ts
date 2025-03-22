import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { Article } from './entities/article.entity';

@Resolver(() => Article)
export class ArticlesResolver {
  constructor(private readonly articlesService: ArticlesService) {}

  @Query(() => [Article], { name: 'articles' })
  async findAll(): Promise<Article[]> {
    console.log('Finding all Articles');
    return this.articlesService.findAll();
  }

  //   @Query(() => Article, { name: 'article' })
  //   async findOne(@Args('id', { type: () => ID }) id: string): Promise<Article> {
  //     return this.articlesService.findOne(id);
  //   }
}

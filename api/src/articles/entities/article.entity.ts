import {
  Entity,
  ObjectIdColumn,
  Column,
  ObjectId,
  CreateDateColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Article as ArticleType } from 'types/article';

@ObjectType()
@Entity('articles')
export class Article implements ArticleType {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectId;

  @Field(() => String)
  @Column({ nullable: false })
  source: {
    id: string;
    name: string;
  };

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  author: string | null;

  @Field(() => String)
  @Column({ nullable: false })
  title: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  description: string | null;

  @Field(() => String)
  @Column({ nullable: false })
  url: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  imageURL: string | null;

  @Field(() => Date, { nullable: true })
  @Column({ nullable: true })
  publish_date: Date | null;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  content: string | null;

  @Field(() => [String])
  @Column('simple-array')
  tags: string[];

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;
}

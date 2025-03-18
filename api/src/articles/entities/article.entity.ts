import {
  Entity,
  ObjectIdColumn,
  Column,
  ObjectId,
  CreateDateColumn,
} from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity('articles')
export class Article {
  @Field(() => ID)
  @ObjectIdColumn()
  id: ObjectId;

  @Field()
  @Column({ nullable: false })
  name: string;

  @Field()
  @Column({ nullable: false })
  content: string;

  @Field(() => Date)
  @Column({ nullable: false })
  publish_date: Date;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;
}

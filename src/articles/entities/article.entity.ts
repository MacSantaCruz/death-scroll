import {
  Entity,
  ObjectIdColumn,
  Column,
  ObjectId,
  CreateDateColumn,
} from 'typeorm';

@Entity('articles')
export class Article {
  @ObjectIdColumn()
  id: ObjectId;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  content: string;

  @Column({ nullable: false })
  publish_date: Date;

  @CreateDateColumn()
  createdAt: Date;
}

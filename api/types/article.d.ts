import { isString } from 'class-validator';

export type Article = {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  imageURL: string | null;
  publish_date: Date | null;
  content: string | null;
  tags: string[];
};

/** Publisher/Creator of a piece of media */
export type Source = {
  /**
   * Unique identifier for the source e.g., "nytimes", "bbc-news"
   */
  id: string;
  /**
   * Formatted name of the source, e.g., "The New York Times", "BBC News"
   */
  name: string;
};

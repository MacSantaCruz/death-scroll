// Format we will use to store articles into the database
export interface Article {
  source: {
    id: string;
    name: string;
  };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  imageURL: string | null;
  publishDate: string | null;
  content: string | null;
  tags: string[];
  /** Timestamp when content was fetched from API */
  fetchDate: string; 
}


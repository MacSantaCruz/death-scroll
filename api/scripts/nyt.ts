import { config } from 'dotenv';
import { Article } from 'types/article';

config();

const BASE_URL = 'https://api.nytimes.com/svc/archive/v1';
const NYT_KEY = process.env.NYT_KEY;
if (!NYT_KEY) {
  throw new Error(
    '[ERROR]: Environment variable NYT_KEY is required but not set.',
  );
}

/**
 * The structure of the response from the New York Times Archive API.
 */
type ArchiveResponse = {
  copyright: string;
  response: {
    docs: {
      abstract: string;
      web_url: string;
      snippet: string;
      lead_paragraph: string;
      source: string;
      multimedia: {
        url: string;
        format: string;
      }[];
      headline: {
        main: string;
      };
      keywords: {
        name: string;
        value: string;
        rank: number;
      }[];
      pub_date: string;
      document_type: string;
      news_desk: string;
      section_name: string;
      byline: {
        original: string;
        person: {
          firstname: string;
          lastname: string;
          middlename?: string;
          organization?: string;
          role: string;
          title?: string;
        }[];
      };
    }[];
  };
};

/**
 *
 * @param data The response from the NYT Archive API
 * @returns An array of Article objects formatted for the database
 */
const ConvertToArticles = (data: ArchiveResponse): Article[] => {
  const articles: Article[] = [];

  data.response.docs.forEach((doc) => {
    const article: Article = {
      source: {
        id: 'nytimes',
        name: doc.source || 'The New York Times',
      },
      author: doc.byline.original || '',
      title: doc.headline.main || '',
      description: doc.lead_paragraph || doc.snippet || null,
      url: doc.web_url || '',
      // TODO: Figure out how to grab newspaper scans shown on web articles (Not given by API?)
      imageURL: null,
      publishDate: doc.pub_date || null,
      content: doc.abstract || null,
      tags: doc.keywords.map((keyword) => keyword.value),
      fetchDate: new Date().toISOString(),
    };
    articles.push(article);
  });

  return articles;
};

/**
 * Fetches the New York Times Archive for a given year and month.
 * @param year The year of the archive to fetch (e.g., 1982)
 * @param month The month of the archive to fetch (1-12)
 * @returns A promise that resolves to an ArchiveResponse object containing the articles for the given month and year.
 * @throws An error if the request fails or if the response is not ok.
 */
export const GetArchive = async (year: number, month: number) => {
  const url = `${BASE_URL}/${year}/${month}.json?api-key=${NYT_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`[ERROR]: ${response.statusText}`);
  }

  const data: ArchiveResponse = await response.json();
  const articles = ConvertToArticles(data);
  return articles;
};

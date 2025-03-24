import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(__dirname, '../.env') });

const API_KEY = process.env.NEWSAPI_KEY || '';
if (!API_KEY) {
  throw new Error('Environment variable NEWSAPI_KEY is required but not set.');
}

const BASE_URL = 'https://newsapi.org/v2';

export const getTopHeadlines = async () => {
  const url = `${BASE_URL}/top-headlines?country=us&apiKey=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.articles;
};

// print getNewsHeadlines
getTopHeadlines()
  .then((articles) => {
    console.log(articles);
  })
  .catch((err) => {
    console.error(err);
  });

/* eslint-disable react-refresh/only-export-components */
import { getNewsCategories } from '@features/news-categories/api/get-news-categories';
import { HomePage } from '@pages/home-page';

import { Route } from './+types/home';

export async function loader() {
  const initialNewsTabs = await getNewsCategories();

  return initialNewsTabs;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { list } = loaderData;

  return <HomePage list={list} />;
}

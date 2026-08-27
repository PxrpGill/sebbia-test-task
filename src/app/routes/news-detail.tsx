/* eslint-disable react-refresh/only-export-components */
import { getNewsDetails } from '@entities/news/api/get-news-details';
import { NewsDetailPage } from '@pages/news-detail-page';

import type { Route } from './+types/news-detail';

export async function loader({ params }: Route.LoaderArgs) {
  const id = Number(params.id);
  const data = await getNewsDetails(id);
  return data;
}

export default function NewsDetail({ loaderData }: Route.ComponentProps) {
  const { news } = loaderData;

  return <NewsDetailPage news={news} />;
}

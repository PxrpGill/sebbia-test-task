import { HomePage } from '@pages/home-page';
import { NewsDetailPage } from '@pages/news-detail-page';
import { ROUTES } from '@shared/config';

export const routeConfig = [
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },

  {
    path: ROUTES.NEWS_DETAIL,
    element: <NewsDetailPage />,
  },
];

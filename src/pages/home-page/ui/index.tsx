import { GetNewsCategoriesRequestType as HomePageProps } from '@features/news-categories/types/news-categories.types';
import { NewsSection } from '@widgets/news-section/ui';

import css from './index.module.css';

export const HomePage = ({ list }: Omit<HomePageProps, 'code'>) => {
  return (
    <main className={css.root}>
      <NewsSection title="Лента новостей" list={list} />
    </main>
  );
};

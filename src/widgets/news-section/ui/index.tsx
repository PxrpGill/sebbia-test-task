import { NewsCategories } from '@features/news-categories';

import type { NewsSectionProps } from '../types/news-section.types';
import css from './index.module.css';
import { NewsList } from './news-list';

export const NewsSection = ({ title, className }: NewsSectionProps) => {
  return (
    <section className={`${css.root} ${className} container`.trim()}>
      {title && <h1 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />}
      <NewsCategories className={css.categories} />
      <NewsList />
    </section>
  );
};

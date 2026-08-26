import { useParams } from 'react-router-dom';

import { useGetNewsDetails } from '@entities/news';
import { formatDate } from '@shared/lib';

import css from './index.module.css';

export const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetNewsDetails(id ? Number(id) : null);

  if (isLoading) {
    return (
      <main className={`${css.root} container ${isLoading && css.loading}`}>Загружаем контент</main>
    );
  }

  const news = data?.news;

  return (
    <main className={`${css.root} container`}>
      {news && (
        <article className={css.article}>
          {news.title && (
            <h1 className={css.title} dangerouslySetInnerHTML={{ __html: news.title }} />
          )}
          {news.date && (
            <time dateTime={news.date} className={css.date}>
              {formatDate(news.date)}
            </time>
          )}
          {news.fullDescription && (
            <div
              className={css.content}
              dangerouslySetInnerHTML={{ __html: news.fullDescription }}
            />
          )}
        </article>
      )}
    </main>
  );
};

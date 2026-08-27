import { GetNewsDetailResponse } from '@entities/news/types/news-detail.types';
import { formatDate } from '@shared/lib';

import css from './index.module.css';

export const NewsDetailPage = ({ news }: GetNewsDetailResponse) => {
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

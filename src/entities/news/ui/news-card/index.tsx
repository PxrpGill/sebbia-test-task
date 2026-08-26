import type { NewsCardProps } from '@entities/news/types/news-card.types';
import { formatDate } from '@shared/lib';
import { AppLink } from '@shared/ui';

import css from './index.module.css';

export const NewsCard = ({ title, date, shortDescription, className, id }: NewsCardProps) => {
  return (
    <article className={`${css.root} ${className}`}>
      {title && <h4 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />}
      {shortDescription && (
        <div
          dangerouslySetInnerHTML={{ __html: shortDescription }}
          className={css.shortDescription}
        />
      )}
      {date && (
        <time dateTime={date} className={css.date}>
          {formatDate(date)}
        </time>
      )}
      {id && <AppLink to={`/news/${id}`} className={css.link} />}
    </article>
  );
};

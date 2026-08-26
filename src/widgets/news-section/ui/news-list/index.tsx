import { useSearchParams } from 'react-router-dom';

import { NewsCard } from '@entities/news';
import { AppLink } from '@shared/ui';
import { useGetNewsByCategory } from '@widgets/news-section/hooks/use-get-news-by-category';

import css from './index.module.css';

export const NewsList = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('categoryId') ?? '0';
  const { data, isLoading } = useGetNewsByCategory(categoryId);

  return (
    <div className={css.root}>
      {isLoading ? (
        <div className={css.loading}>Загружаем контент</div>
      ) : (
        <>
          {data?.list?.length ? (
            <ul className={css.list}>
              {data?.list?.map((news, newsKey) => (
                <li className={css.paragraph} key={`${news.id}-${newsKey}`}>
                  <AppLink to={`/news/${news.id}`}>
                    <NewsCard {...news} className={css.newsCard} />
                  </AppLink>
                </li>
              ))}
            </ul>
          ) : (
            <div className={css.empty}>Извините, но в этой категории нет новостей</div>
          )}
        </>
      )}
    </div>
  );
};

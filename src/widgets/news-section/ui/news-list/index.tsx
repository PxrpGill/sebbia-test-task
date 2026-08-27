import { useSearchParams } from 'react-router';

import { NewsCard } from '@entities/news';
import { Button } from '@shared/ui';
import { useGetNewsByCategory } from '@widgets/news-section/hooks/use-get-news-by-category';

import css from './index.module.css';

export const NewsList = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('categoryId') ?? '0';
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetNewsByCategory(categoryId);

  const allNews = data?.pages.flatMap((page) => page.list) ?? [];

  return (
    <div className={css.root}>
      {isLoading ? (
        <div className={css.loading}>Загружаем контент</div>
      ) : (
        <>
          {allNews.length ? (
            <ul className={css.list}>
              {allNews.map((news, newsKey) => (
                <li className={css.paragraph} key={`${news?.id}-${newsKey}`}>
                  <NewsCard {...news} className={css.newsCard} />
                </li>
              ))}
            </ul>
          ) : (
            <div className={css.empty}>Извините, но в этой категории нет новостей</div>
          )}
          {hasNextPage && (
            <Button
              className={css.showMoreButton}
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              {isFetchingNextPage ? 'Загружаем...' : 'Показать ещё'}
            </Button>
          )}
        </>
      )}
    </div>
  );
};

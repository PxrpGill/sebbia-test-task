import { useSearchParams } from 'react-router-dom';

import type { PropsWithClassName } from '@shared/types/props-with-classname.types';
import { Button, Loader } from '@shared/ui';

import { useGetNewsCategories } from '../hooks/use-get-news-categories';
import { NEWS_CATEGORIES_LOADERS_COUNT } from '../models/news-categories.constants';
import css from './index.module.css';

export const NewsCategories = ({ className }: PropsWithClassName) => {
  const { data, isLoading } = useGetNewsCategories();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('categoryId');

  const handleButtonClick = (categoryId: number) => {
    setSearchParams({ categoryId: String(categoryId) });
  };

  return (
    <div className={`${css.root} ${className}`}>
      {isLoading &&
        Array.from({ length: NEWS_CATEGORIES_LOADERS_COUNT }).map((_, index) => (
          <Loader className={css.loader} key={index} />
        ))}
      {data &&
        data?.list?.map((category, index) => (
          <Button
            key={index}
            onClick={() => handleButtonClick(category.id)}
            className={`${css.button} ${category.id === Number(currentCategory) && css.active}`}
          >
            {category.name}
          </Button>
        ))}
    </div>
  );
};

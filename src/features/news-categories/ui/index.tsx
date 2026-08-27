import { useSearchParams } from 'react-router';

import type { PropsWithClassName } from '@shared/types/props-with-classname.types';
import { Button } from '@shared/ui';

import { GetNewsCategoriesRequestType } from '../types/news-categories.types';
import css from './index.module.css';

export const NewsCategories = ({
  className,
  list,
}: PropsWithClassName & Omit<GetNewsCategoriesRequestType, 'code'>) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('categoryId');

  const handleButtonClick = (categoryId: number) => {
    setSearchParams({ categoryId: String(categoryId) });
  };

  return (
    <div className={`${css.root} ${className}`}>
      {list?.map((category, index) => (
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

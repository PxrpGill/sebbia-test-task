import type { NewsCardProps } from '@entities/news/types/news-card.types';
import { GetNewsCategoriesRequestType } from '@features/news-categories/types/news-categories.types';
import type { PropsWithClassName } from '@shared/types/props-with-classname.types';

export type NewsSectionProps = {
  title?: string;
} & PropsWithClassName &
  Omit<GetNewsCategoriesRequestType, 'code'>;

export type GetListNewsByCategoryIdRequestType = {
  code: number;
  list?: Array<Omit<NewsCardProps, 'className'>>;
};

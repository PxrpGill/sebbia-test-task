import type { NewsCardProps } from '@entities/news/types/news-card.types';
import type { PropsWithClassName } from '@shared/types/props-with-classname.types';

export type NewsSectionProps = {
  title?: string;
} & PropsWithClassName;

export type GetListNewsByCategoryIdRequestType = {
  code: number;
  list?: Array<Omit<NewsCardProps, 'className'>>;
};

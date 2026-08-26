import { cache } from 'react';

import { API_URLS } from '@shared/api/api-urls';
import { apiInstance } from '@shared/api/config';

import type { GetNewsCategoriesRequestType } from '../types/news-categories.types';

export const getNewsCategories = cache(async (): Promise<GetNewsCategoriesRequestType> => {
  const response = await apiInstance.get(API_URLS.getCategories);

  return response.data;
});

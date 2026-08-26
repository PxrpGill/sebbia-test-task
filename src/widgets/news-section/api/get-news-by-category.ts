import { cache } from 'react';

import { API_URLS } from '@shared/api/api-urls';
import { apiInstance } from '@shared/api/config';

import type { GetListNewsByCategoryIdRequestType } from '../types/news-section.types';

export const getNewsByCategory = cache(
  async (categoryId: number | string): Promise<GetListNewsByCategoryIdRequestType> => {
    const response = await apiInstance.get(API_URLS.getNewsByCategory(categoryId));

    return response.data;
  },
);

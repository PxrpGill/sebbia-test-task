import { cache } from 'react';

import { API_URLS } from '@shared/api/api-urls';
import { apiInstance } from '@shared/api/config';

import type { GetListNewsByCategoryIdRequestType } from '../types/news-section.types';

export const getNewsByCategory = cache(
  async (
    categoryId: number | string,
    page: number = 0,
  ): Promise<GetListNewsByCategoryIdRequestType> => {
    const response = await apiInstance.get(API_URLS.getNewsByCategory(categoryId), {
      params: { page },
    });

    return response.data;
  },
);

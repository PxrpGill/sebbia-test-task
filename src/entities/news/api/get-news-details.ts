import { cache } from 'react';

import { API_URLS } from '@shared/api/api-urls';
import { apiInstance } from '@shared/api/config';

import type { GetNewsDetailResponse } from '../types/news-detail.types';

export const getNewsDetails = cache(async (id: number): Promise<GetNewsDetailResponse> => {
  const response = await apiInstance.get(API_URLS.getNewsDetails, {
    params: { id },
  });

  return response.data;
});

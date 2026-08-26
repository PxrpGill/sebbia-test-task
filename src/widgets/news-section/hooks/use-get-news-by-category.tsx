import { useQuery } from '@tanstack/react-query';

import { getNewsByCategory } from '../api/get-news-by-category';

export const useGetNewsByCategory = (categoryId: string | null) => {
  return useQuery({
    queryKey: ['news', categoryId],
    queryFn: () => getNewsByCategory(categoryId!),
    enabled: !!categoryId,
  });
};

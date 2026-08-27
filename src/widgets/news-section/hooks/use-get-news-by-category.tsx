import { useInfiniteQuery } from '@tanstack/react-query';

import { getNewsByCategory } from '../api/get-news-by-category';

export const useGetNewsByCategory = (categoryId: string | null) => {
  return useInfiniteQuery({
    queryKey: ['news', categoryId],
    queryFn: ({ pageParam = 0 }) => getNewsByCategory(categoryId!, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.list || lastPage.list.length === 0) {
        return undefined;
      }
      return allPages.length;
    },
    initialPageParam: 0,
    enabled: !!categoryId,
  });
};

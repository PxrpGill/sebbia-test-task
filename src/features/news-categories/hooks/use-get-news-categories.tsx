import { useQuery } from '@tanstack/react-query';

import { getNewsCategories } from '../api/get-news-categories';

export const useGetNewsCategories = () => {
  const query = useQuery({
    queryKey: ['news-categories'],
    queryFn: getNewsCategories,
  });

  return query;
};

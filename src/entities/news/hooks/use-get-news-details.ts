import { useQuery } from '@tanstack/react-query';

import { getNewsDetails } from '../api/get-news-details';

export const useGetNewsDetails = (id: number | null) => {
  return useQuery({
    queryKey: ['news', 'detail', id],
    queryFn: () => getNewsDetails(id!),
    enabled: id !== null,
  });
};

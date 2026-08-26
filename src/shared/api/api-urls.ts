export const API_URLS = {
  getCategories: '/news/categories',
  getNewsByCategory: (newsId: string | number) => `/news/categories/${newsId}/news`,
  getNewsDetails: '/news/details',
};

export type NewsDetailType = {
  id: number;
  title?: string;
  date?: string;
  shortDescription?: string;
  fullDescription?: string;
};

export type GetNewsDetailResponse = {
  code?: number;
  news: NewsDetailType;
};

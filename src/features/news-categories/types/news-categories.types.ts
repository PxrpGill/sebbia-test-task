export type NewsCategoryType = {
  id: number;
  name: string;
};

export type GetNewsCategoriesRequestType = {
  code: number;
  list: Array<NewsCategoryType>;
};

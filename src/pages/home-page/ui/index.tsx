import { NewsSection } from '@widgets/news-section/ui';

import css from './index.module.css';

export const HomePage = () => {
  return (
    <main className={css.root}>
      <NewsSection title="Лента новостей" />
    </main>
  );
};

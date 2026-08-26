import type { PropsWithClassName } from '@shared/types/props-with-classname.types';

import css from './index.module.css';

export const Loader = ({ className }: PropsWithClassName) => {
  return <div className={`${css.root} ${className}`} />;
};

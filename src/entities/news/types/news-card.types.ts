import type { PropsWithClassName } from '@shared/types/props-with-classname.types';

export type NewsCardProps = {
  id?: number;
  title?: string;
  date?: string;
  shortDescription?: string;
} & PropsWithClassName;

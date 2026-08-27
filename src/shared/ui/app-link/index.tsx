import type { PropsWithChildren } from 'react';
import { Link, type LinkProps } from 'react-router';

type AppLinkProps = LinkProps & PropsWithChildren;

export const AppLink = ({ children, ...props }: AppLinkProps) => {
  return <Link {...props}>{children}</Link>;
};

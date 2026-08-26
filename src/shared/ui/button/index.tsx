import type { ButtonHTMLAttributes, ReactNode } from 'react';

import css from './index.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <button className={`${css.root} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
};

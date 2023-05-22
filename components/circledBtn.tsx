import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode
  className?: string
  textClassName?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const CircledBtn: FC<Props> = ({ children, className, textClassName, ...props }) => {
  return <button
    className={cn(
      'transition-all rounded-full',
      className
    )}
    {...props}
  >
    <span className={cn('block', textClassName)}>{children}</span>
  </button>
};

export default CircledBtn;
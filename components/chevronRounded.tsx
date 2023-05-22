import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import cn from 'classnames';

type Props = {
  color?: 'blue' | 'white'
  height?: number
  className?: string
  chevronClassName?: string
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const ChevronRounded: FC<Props> = ({ color = 'blue', height = 30, className, chevronClassName, ...props }) => {
  let width = height / 2;

  return <button
    className={cn(
      'group flex items-center justify-center rounded-full border transition-all disabled:opacity-60 disabled:pointer-events-none',
      color === 'blue' ? 'border-blue1 hover:bg-blue1 active:bg-blue2' : 'border-white hover:bg-white active:bg-white',
      className,
    )}
    {...props}
  >
    <svg
      className={cn(
        'transition-colors',
        color === 'blue' ? 'stroke-blue1 group-hover:stroke-white' : 'stroke-white group-hover:stroke-blue1',
        chevronClassName
      )}
      width={width} height={height} viewBox={`0 0 ${width} ${height}`} stroke='#0222A5' fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path d={`M0.923828 0.922852L${width - .4} ${width}L0.923828 ${height}`} />
    </svg>
  </button>
};

export default ChevronRounded;
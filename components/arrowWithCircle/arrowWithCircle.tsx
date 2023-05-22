import { CSSProperties, DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import ChevronRounded from '../chevronRounded';
import cls from './styles.module.scss';

type Props = {
  children: ReactNode
  color?: 'blue' | 'white'
  circleSize?: number
  className?: string
  circleClassName?: string
  signClassName?: string
  width?: 'full' | 'fit'
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const ArrowWithCircle: FC<Props> = ({ children, circleSize = 30, color = 'blue', className, circleClassName, signClassName, width = 'fit', ...props }) => {

  return <div
    className={cn(
      'group cursor-pointer',
      width === 'fit' ? 'w-fit' : 'w-full',
      cls.arrow, className,
    )}
    {...props}
  >
    <p className={cn('text-esmLight', signClassName)}>{children}</p>
    <div
      className={cn(
        'relative -mt-2.5',
        width === 'fit' ? 'w-[calc(100%_+_3.5em)]' : 'w-full'
      )}
    >
      <span
        className={cn(
          'absolute h-px transition-all',
          color === 'blue' ? 'bg-blue1' : 'bg-white',
          cls.line,
          circleClassName,
        )}
        style={{
          '--arrowWithCircle_circleSize': `${circleSize}px`
        } as CSSProperties}
      />
      <ChevronRounded
        className={cn(
          'ml-auto group-hover:bg-transparent',
          color === 'blue' ? 'group-hover:[&>svg]:stroke-blue1' : 'group-hover:[&>svg]:stroke-white',
        )}
        height={8}
        style={{ width: circleSize, height: circleSize }}
        color={color}
      />
    </div>
  </div>
};

export default ArrowWithCircle;
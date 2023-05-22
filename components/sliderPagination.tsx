import { DetailedHTMLProps, FC, HTMLAttributes, useRef } from 'react';
import cn from 'classnames';

type Props = {
  currentPortion: number
  portionsCount: number
  windowWidth: number
  className?: string
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

//in order to properly render the component after screen changing, a parent component must have a useResize hook

const SliderPagination: FC<Props> = ({ portionsCount, className, windowWidth, currentPortion, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  let Lines = Array.from(Array(portionsCount).keys())
    .map(l => <span className={cn('block h-px w-full', l <= currentPortion ? 'bg-line2' : 'bg-line')} key={l} />);

  return <div className={cn('flex items-center gap-x-5 text-esm text-grey2', className)} ref={ref} {...props}>
    <p>1</p>
    <div className='flex h-px w-full'>
      {Lines}
    </div>
    <p>{portionsCount}</p>
  </div>
};

export default SliderPagination;
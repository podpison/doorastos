import { FC } from 'react';
import cn from 'classnames';
import { SVGProps } from 'react';

type Props = {
  className?: string
} & SVGProps<SVGSVGElement>

//to rotate the arrow you have to add the data-state='open' property and the group class
// className='group' data-state={condition ? 'open' : 'close'}

const ArrowDown: FC<Props> = ({ className, ...props }) => {
  return <svg
    className={cn(
      "ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180",
      className
    )}
    aria-hidden width="8" height="17" viewBox="0 0 8 17" fill="none" xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3.64645 16.3536C3.84171 16.5488 4.15829 16.5488 4.35355 16.3536L7.53553 13.1716C7.7308 12.9763 7.7308 12.6597 7.53553 12.4645C7.34027 12.2692 7.02369 12.2692 6.82843 12.4645L4 15.2929L1.17157 12.4645C0.97631 12.2692 0.659728 12.2692 0.464466 12.4645C0.269203 12.6597 0.269203 12.9763 0.464466 13.1716L3.64645 16.3536ZM3.5 -2.18556e-08L3.5 16L4.5 16L4.5 2.18556e-08L3.5 -2.18556e-08Z" fill="#0222A5" />
  </svg>
};

export default ArrowDown;
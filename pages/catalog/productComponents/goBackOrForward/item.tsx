import Link from 'next/link';
import { FC, ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode
  href: string
  isReverse?: boolean
}

const Item: FC<Props> = ({ children, href, isReverse = false }) => {
  let reverseClassNames = isReverse && 'rotate-180 col-[1] row-[1]';

  return <Link className='group grid grid-cols-[repeat(2,_max-content)] items-center gap-x-2.5 md:gap-x-12' href={href}>
    <span className='text10-18 text-grey1 transition-colors group-hover:text-blue1 group-active:text-blue2'>{children}</span>

    <svg className={cn('md:hidden', reverseClassNames)} width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.3536 3.64644C20.5488 3.84171 20.5488 4.15829 20.3536 4.35355L17.1716 7.53553C16.9763 7.73079 16.6597 7.73079 16.4645 7.53553C16.2692 7.34027 16.2692 7.02369 16.4645 6.82843L19.2929 4L16.4645 1.17157C16.2692 0.976309 16.2692 0.659727 16.4645 0.464465C16.6597 0.269202 16.9763 0.269202 17.1716 0.464465L20.3536 3.64644ZM-4.37114e-08 3.5L20 3.5L20 4.5L4.37114e-08 4.5L-4.37114e-08 3.5Z" fill="#0222A5" />
    </svg>
    <svg className={cn('max-md:hidden', reverseClassNames)} width="101" height="8" viewBox="0 0 101 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100.354 3.64644C100.549 3.8417 100.549 4.15828 100.354 4.35354L97.1716 7.53553C96.9763 7.73079 96.6597 7.73079 96.4645 7.53553C96.2692 7.34026 96.2692 7.02368 96.4645 6.82842L99.2929 3.99999L96.4645 1.17156C96.2692 0.976302 96.2692 0.65972 96.4645 0.464458C96.6597 0.269195 96.9763 0.269195 97.1716 0.464458L100.354 3.64644ZM-4.37114e-08 3.5L100 3.49999L100 4.49999L4.37114e-08 4.5L-4.37114e-08 3.5Z" fill="#0222A5" />
    </svg>
  </Link>
};

export default Item;
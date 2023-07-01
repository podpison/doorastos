import Link from 'next/link';
import { FC } from 'react';
import cn from 'classnames';

type Props = {
  text: string
  where: string
  activeLink: string | string[] | undefined
}

const Item: FC<Props> = ({ text, where, activeLink }) => {
  return <Link
    className={cn(
      'text-esm w-full text-center transition-colors p-2.5 active:bg-blue2 active:text-white',
      activeLink === where ? 'bg-blue1 text-white' : 'bg-line text-black hover:bg-grey4',
    )}
    href={{ query: `where=${where}` }}
  >
    {text}
  </Link>
};

export default Item;
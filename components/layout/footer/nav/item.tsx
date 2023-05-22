import Link from 'next/link';
import { FC } from 'react';
import textToURL from './../../../../helpers/textToURL';

type Props = {
  text: string
}

const Item: FC<Props> = ({ text }) => {
  return <Link className='font-light text-grey4 text-[12px] w-fit esm:text-[14px]' href={textToURL(text)}>
    {text}
  </Link>
};

export default Item;
import { FC } from 'react';
import Item from './item';

const items = [
  'Catalog',
  'How to choose doors',
  'Stock',
  'About manufacturer',
  'Site map',
];

const Nav: FC = () => {
  let Items = items.map((i, index) => <Item text={i} key={index} />);

  return <nav className='grid gap-y-2.5 mt-5 esm:col-[1/3] esm:mt-7 smlg:grid-cols-2 smlg:col-[2] smlg:row-[1] smlg:gap-x-4 smlg:mt-0 smlg:mx-auto lg:flex'>
    {Items}
  </nav>
};

export default Nav;
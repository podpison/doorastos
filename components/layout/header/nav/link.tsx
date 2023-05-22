import NavLink from '@/components/navLink';
import { FC } from 'react';
import { HeaderLinkType } from '..';
import textToURL from '@/helpers/textToURL';

type Props = {

} & HeaderLinkType

const Link: FC<Props> = ({ name }) => {
  return <NavLink className='text-grey1 transition-colors hover:text-grey2' activeClassName={{ color: '#727272' }} href={textToURL(name) || ''}>
    {name}
  </NavLink>
};

export default Link;
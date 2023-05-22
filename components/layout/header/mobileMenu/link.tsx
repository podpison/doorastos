import { FC } from 'react';
import { HeaderLinkType } from '..';
import NavLink from '@/components/navLink';
import cn from 'classnames';
import textToURL from '@/helpers/textToURL';

type Props = {
  className?: string
  onClick?: () => void
} & HeaderLinkType

const Link: FC<Props> = ({ name, className, onClick }) => {
  return <NavLink
    className={cn('group block text-grey1 mt-4 first-child:mt-0 sm:text-[18px] md:text-[20px]', className)}
    activeClassName='[&>span]:bg-black'
    href={textToURL(name) || ''}
    onClick={onClick}
  >
    <p>{name}</p>
    <span className='block h-px w-full bg-line transition-colors mt-4 group-hover:bg-blue1' />
  </NavLink>
};

export default Link;
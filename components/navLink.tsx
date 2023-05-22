import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties, FC, ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  href: string
  children: ReactNode
  className?: string 
  activeClassName?: CSSProperties | string //in order to avoid using many classes for a signle property
} & LinkProps

const NavLink: FC<Props> = ({ href, children, activeClassName, className, ...props }) => {
  const router = useRouter();
  let isActive = router.pathname === '/' + href;

  return <Link
    className={cn('transition-all', className, (typeof activeClassName === 'string' && isActive) && activeClassName)}
    style={(typeof activeClassName !== 'string' && isActive) ? activeClassName : undefined}
    href={href}
    data-isactive={isActive}
    {...props}
  >
    {children}
  </Link>
};

export default NavLink;
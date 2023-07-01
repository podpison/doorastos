import { FC } from 'react';
import Item from './item';
import cn from 'classnames';

export type ButtonsGroupItemType = {
  text: string
  where: string
}

type Props = {
  activeLink: string | string[] | undefined
  items: ButtonsGroupItemType[]
  className?: string
}

const ButtonsGroup: FC<Props> = ({ activeLink, items, className }) => {
  let Items = items.map((i, index) => <Item activeLink={activeLink} {...i} key={index} />);

  return <div className={cn('flex w-full md:h-fit max-md:mt-5', className)}>
    {Items}
  </div>
};

export default ButtonsGroup;
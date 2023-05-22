import { FC } from 'react';
import cn from 'classnames';
import { motion, MotionProps } from 'framer-motion';
import Item, { TextsItemType } from './item';

type Props = {
  items: TextsItemType[]
  className?: string
  itemClassName?: string
} & MotionProps

const Texts: FC<Props> = ({ items, className, itemClassName, ...props }) => {
  let Items = items.map((i, index) => <Item {...i} itemClassName={itemClassName} key={index} />);

  return <motion.div className={cn('flex flex-col gap-y-2.5', className)} {...props}>
    {Items}
  </motion.div>
};

export default Texts;
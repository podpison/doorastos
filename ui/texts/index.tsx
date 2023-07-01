import { FC } from 'react';
import cn from 'classnames';
import { motion, MotionProps } from 'framer-motion';
import Item, { TextsItemType } from './item';

type Props = {
  items: TextsItemType[]
  className?: string
  itemClassName?: string
  headingClassName?: string
} & MotionProps

const Texts: FC<Props> = ({ items, className, itemClassName, headingClassName, ...props }) => {
  let Items = items.map((i, index) => <Item {...i} headingClassName={headingClassName} itemClassName={itemClassName} key={index} />);

  return <motion.div className={cn('flex flex-col gap-y-2.5', className)} {...props}>
    {Items}
  </motion.div>
};

export default Texts;
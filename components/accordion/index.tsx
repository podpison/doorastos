import { FC } from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import cn from 'classnames';
import Item, { AccordionItemType } from './item';
import { TextsItemType } from '../texts/item';

type Props = {
  className?: string
  items: TextsItemType[]
}

const Accordion: FC<Props> = ({ className, items }) => {
  let Items = items.map((i, index) => <Item {...i} id={index} key={index} />);

  return <RadixAccordion.Root
    className={cn("flex flex-col w-full divide-y divide-line last:border-b last:border-line", className)}
    type="multiple"
  >
    {Items}
  </RadixAccordion.Root>
};

export default Accordion;
import * as Accordion from '@radix-ui/react-accordion';
import { FC } from 'react';
import ArrowDown from '../icons/ArrowDown';
import Texts from '../texts';
import { TextsItemType } from '../texts/item';

export type AccordionItemType = { //for any other component

} & TextsItemType

export type AccordionItemWithIdType = { //for the parent component
  id: number
} & TextsItemType

type Props = {

} & AccordionItemWithIdType


const Item: FC<Props> = ({ heading, description, id }) => {
  typeof description === 'string' && (description = [description]);
  let items = description.map(i => ({ description: i }));

  return <Accordion.Item className='group relative' value={String(id)}>
    <span className='absolute w-full h-px bg-line hidden group-first:block md:w-[200vw] md:-left-[100vw]' />
    <Accordion.Header className='group/header'>
      <Accordion.Trigger className='flex justify-between items-center w-full pt-5 pb-2.5'>
        <span className='text-small transition-colors group-hover/header:text-blue1'>{heading}</span>
        <ArrowDown />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content
      className='overflow-hidden data-[state=open]:animate-slideDown pb-2.5 data-[state=closed]:animate-slideUp'
    >
      <Texts itemClassName='font-light mt-2.5 first:mt-0' items={items} />
    </Accordion.Content>
  </Accordion.Item>
};

export default Item;
import { Dispatch, FC, SetStateAction } from 'react';
import Image from 'next/image';
import ArrowWithCircle from '@/ui/arrowWithCircle/arrowWithCircle';
import cn from 'classnames';
import textToURL from '@/helpers/textToURL';
import capitalizeFirstLetter from '@/helpers/capitalizeFirstLetter';

export type StockItemType = {
  heading: string
  description: string
  img: {
    src: string
    alt: string
  }
  id: number
}

type Props = {
  activeItemType: string | null
  setActiveItemType: Dispatch<SetStateAction<string | null>>
} & StockItemType

const Item: FC<Props> = ({ heading, description, img, id, activeItemType, setActiveItemType }) => {
  let type = 'stock' + capitalizeFirstLetter(textToURL(heading));
  const onClick = () => setActiveItemType(type);

  return <div
    className={cn(
      'grid py-12 gap-y-7 gap-x-5 esm:grid-cols-[1fr_max(200px,_35%)] esm:grid-rows-[repeat(3,_max-content)] md:gap-x-20 md:grid-cols-[1fr_350px]',
      'first:pt-0',
      'last:pb-0',
    )}
  >
    <div className='flex flex-col gap-y-2.5 max-w-[470px]'>
      <h6 className='text14-36 font-medium'>{heading}</h6>
      <p className='text-esm max-w-[80%]'>{description}</p>
      <Image className='w-full object-cover max-h-[300px] esm:hidden' src={img?.src} alt={img?.alt} priority width={300} height={350} />
    </div>
    <Image className='w-full object-cover max-esm:max-h-[300px] max-esm:hidden esm:row-[1/4] esm:col-[2]' src={img?.src} alt={img?.alt} priority width={300} height={350} />
    <ArrowWithCircle
      className='text-blue1'
      text='Get a discount'
      forceActiveStatus={activeItemType === type}
      onClick={onClick}
    />
  </div>
};

export default Item;
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { StaticImageData } from 'next/dist/client/image';
import cn from 'classnames';
import ArrowDown from '@/ui/icons/ArrowDown';
import Texts from '@/ui/texts';
import ArrowWithCircle from '@/ui/arrowWithCircle/arrowWithCircle';
import { TextsItemType } from '@/ui/texts/item';
import HelpChooseDialog from '@/ui/dialogs/helpChooseDialog';

export type AdditionalSecurityItemType = {
  img: StaticImageData
  heading: string
  subheading: string
  description: TextsItemType[]
  type: 'antiCutPrice' | 'antiTheftSystem' | 'armoredPrice'
  isExpandable?: boolean
  className?: string
}

type Props = {
  windowWidth: number
} & AdditionalSecurityItemType

const Item: FC<Props> = ({ heading, img, subheading, description, type, isExpandable, className, windowWidth }) => {
  const [isDescOpen, setIsDescOpen] = useState(false);
  const [isHCDOpen, setIsHCDOpen] = useState(false); // HCD - help choose dialog

  const handleHCDOpenStatus = () => setIsHCDOpen(prev => !prev);
  const handleDescStatus = () => setIsDescOpen(prev => !prev);
  let isLaptop = windowWidth >= 768;

  useEffect(() => {
    !isExpandable && setIsDescOpen(isLaptop)
  }, [isLaptop, isExpandable]);

  return <div className={cn('group grid gap-y-5 md:grid-cols-[1fr_calc(50%)] md:gap-x-7 smlg:gap-x-12 lg:gap-x-24', className)} data-state={isDescOpen ? 'open' : 'close'}>
    <h5 className='h-fit md:group-odd:text-right md:group-even:absolute md:group-even:left-1/2'>{heading}</h5>
    <div className='flex bg-grey3 max-h-[250px] py-5 md:group-even:col-[1] md:group-even:row-[1]'>
      <Image className='h-full w-auto object-contain m-auto max-md:max-h-[210px]' src={img} alt={heading} priority />
    </div>
    <div className='flex flex-col gap-y-5 md:group-odd:col-[2] md:group-even:row-[1] md:group-even:mt-16 lg:group-even:mt-[5rem]'>
      <h6 className='text14-16 max-w-[31em]'>{subheading}</h6>
      {(isExpandable && isLaptop) && <p className='text-esm text-grey1 md:max-w-[30em]'>{description[0].description as string}</p>}
      <Texts className={cn('[&>p]:max-w-[30em]', !isDescOpen && '-z-50')} data-open={isDescOpen} animate={{
        height: !isDescOpen ? 0 : 'auto',
        opacity: !isDescOpen ? 0 : 1,
        marginTop: !isDescOpen ? '-20px' : 0,
      }}
        items={(isExpandable && isLaptop) ? description.slice(1) : description}
      />
      <ArrowWithCircle
        className='h-fit mt-2.5 group-odd:hidden'
        text='Find out the cost'
        onClick={handleHCDOpenStatus}
      />
      {!(!isExpandable && isLaptop) &&
        <button className='flex items-center justify-between gap-x-5 w-fit transition-colors hover:text-blue1' onClick={handleDescStatus}>
          <span className='text14'>{isDescOpen ? 'Hide' : 'More'}</span>
          <ArrowDown className='h-[12px] mt-1' />
        </button>
      }
    </div>
    {isLaptop &&
      <ArrowWithCircle
        className='row-[2] col-[1] h-fit absolute right-[calc(50%_+_28px_+_3.5em)] mt-48 group-even:hidden smlg:right-[calc(50%_+_48px_+_3.5em)] lg:right-[calc(50%_+_100px_+_3.5em)]'
        text='Find out the cost'
        onClick={handleHCDOpenStatus}
      />
    }

    <HelpChooseDialog open={isHCDOpen} onOpenChange={status => setIsHCDOpen(status)} thirdStageHeading={`${heading} price`} type={type} initialStage={3} />
  </div>
};

export default Item;
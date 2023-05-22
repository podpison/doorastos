import Texts from '@/components/texts';
import { TextsItemType } from '@/components/texts/item';
import DialogBase from '@/components/dialogs/dialogBase';
import { DialogProps } from '@radix-ui/react-dialog';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import InfoIcon from '../icons/infoIcon';

export type AdditionalInfoType = {
  img: StaticImageData
  texts: TextsItemType[]
}

export type AdditionalInfoProps = {
  heading: string
  openDialog: () => void
} & AdditionalInfoType & DialogProps

const AdditionalInfoDialog: FC<AdditionalInfoProps> = ({ heading, img, texts, open, openDialog, ...props }) => {
  let isDialogShown = open && img && texts;

  return <div>
    <InfoIcon className='hover:fill-grey2 active:fill-blue1' onClick={openDialog} />
    {isDialogShown &&
      <DialogBase className='max-w-[465px] py-5' closeIconClassName='right-2.5 top-6 esm:right-5' open={open} {...props}>
        <h4 className='text-[20px] md:text-[24px]'>{heading}</h4>
        <Texts className='mt-10' items={texts} />
        <Image className='mt-7' src={img} width={425} alt={heading} />
      </DialogBase>
    }
  </div>
};

export default AdditionalInfoDialog;
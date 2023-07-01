import Image from 'next/image';
import { FC } from 'react';
import doorbellImg from '../../public/imgs/pages/aboutManufacturer/ourGoal/doorbell.webp';
import doorbellMobileImg from '../../public/imgs/pages/aboutManufacturer/ourGoal/doorbell-mobile.webp';
import Texts from '@/ui/texts';
import { TextsItemType } from '@/ui/texts/item';

const textItems: TextsItemType[] = [
  {
    description: 'We are ready to offer our clients entrance doors of any complexity and burglary resistance, '
  },
  {
    description: 'fireproof doors, double doors, with windows and double-glazed windows, any size and price groups.'
  },
];

const OurGoal: FC = () => {
  return <section className='mt100-200 grid md:grid-cols-[max-content_1fr] md:grid-rows-[max-content_1fr] md:gap-x-7 smlg:gap-x-12 lg:gap-x-[100px]'>
    <h3 className='max-w-[15em] md:col-[2] md:row-[1]'>We have been producing entrance doors since 2006</h3>
    <picture className='max-md:mt-5 md:col-[1] md:row-[1/3]'>
      <source srcSet={doorbellImg.src} media='(min-width: 768px)' />
      <Image className='h-full md:w-[320px] smlg:w-[400px] lg:w-[500px]' src={doorbellMobileImg} alt='Doorbell' priority />
    </picture>
    <div className='divide-y divide-line max-w-[480px] mt-7 md:col-[2] md:row-[2] md:mt-5'>
      <Texts className='pb-5' itemClassName='text14-18' items={textItems} />
      <div className='flex flex-col gap-y-[5px] pt-5'>
        <h6 className='text14-18'>Our goal:</h6>
        <p className='text-esm text-black'>To provide the client with a comprehensive and balanced solution based on our many years of experience, combining a quality product and an objective price.</p>
      </div>
    </div>
  </section>
};

export default OurGoal;
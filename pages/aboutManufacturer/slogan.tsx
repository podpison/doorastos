import Texts from '@/components/texts';
import { TextsItemType } from '@/components/texts/item';
import Image from 'next/image';
import { FC } from 'react';
import doorCreationImg from '../../public/imgs/pages/aboutManufacturer/slogan/doorCreation.webp';
import doorCreationMobileImg from '../../public/imgs/pages/aboutManufacturer/slogan/doorCreation-mobile.webp';

const textItems: TextsItemType[] = [
  {
    heading: 'Our production is our pride',
    description: [
      'Expert doors are manufactured in our own full-cycle factory.',
      'Cutting, stamping and bending of metal, robotic welding, powder coating of the frame and canvas, milling and pasting of decorative panels, veneering - all this is done on the most modern equipment.',
      'Throughout the entire production cycle, individual elements or works are subject to quality control.',
    ]
  }
];

const Slogan: FC = () => {
  return <section>
    <div className='grid grid-cols-[100%] md:grid-cols-2 md:gap-x-7 smlg:gap-x-12 lg:gap-x-[100px]'>
      <h3 className='max-w-[19em]'>Expert is the leader in the production of steel doors in Russia</h3>
      <picture className='relative left-[calc((-100vw_-_-100%)_/_2)] w-screen mt-5 max-md:max-h-[450px] md:col-[1/3] md:mt-12'>
        <source srcSet={doorCreationImg.src} media='(min-width: 768px)' />
        <Image className='w-screen object-cover object-center max-w-none h-full md:min-h-[400px]' src={doorCreationMobileImg} alt='Door creation' priority />
      </picture>
      <Texts className='max-w-[380px] mt-7 md:col-[2] md:row-[1] md:mt-2.5' headingClassName='text14-16' items={textItems} />
    </div>
  </section>
};

export default Slogan;
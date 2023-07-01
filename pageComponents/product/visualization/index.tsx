import { FC, useState } from 'react';
import visualizationImg from './../../../public/imgs/pages/product/visualization.webp';
import Image from 'next/image';
import ArrowWithCircle from '@/ui/arrowWithCircle/arrowWithCircle';
import HelpChooseDialog from '@/ui/dialogs/helpChooseDialog';

const Visualization: FC = () => {
  const [isHCDOpen, setIsHCDOpen] = useState(false); // HCD - help choose dialog
  const handleHCDOpenStatus = () => setIsHCDOpen(prev => !prev);

  return <section className='mt150-250 relative py-7 md:py-16'>
    <div className='leftContainer absolute top-0 w-screen h-full max-w-[100vw] bg-black -z-20' />
    <div className='grid max-md:gap-y-5 md:items-center md:grid-cols-[1fr_52%] md:gap-x-10'>
      <Image className='max-md:w-full md:col-[2] md:row-[1]' src={visualizationImg} alt='Visualization' priority width={590} height={470} />
      <div>
        <div className='flex flex-col gap-y-2.5'>
          <h5 className='text-white max-w-[15em] max-sm:text-[20px]'>Free visualization of the door in your interior</h5>
          <p className='text-esm text-grey4 max-w-[25em]'>It&apos;s easier to choose now! Our designers will visualize the door you like in your interior for free.</p>
        </div>
        <ArrowWithCircle
          className='mt30-50 text-white max-w-[240px] md:max-w-[260px] smlg:max-w-[300px]'
          text='Order visualization'
          color='white'
          forceActiveStatus={isHCDOpen}
          onClick={handleHCDOpenStatus}
        />
      </div>
    </div>

    <HelpChooseDialog open={isHCDOpen} onOpenChange={status => setIsHCDOpen(status)} initialStage={3} />
  </section>
};

export default Visualization;
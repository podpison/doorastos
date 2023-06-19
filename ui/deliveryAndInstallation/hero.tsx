import { FC, useState } from 'react';
import doorImg from '../../public/imgs/pages/deliveryAndInstallation/hero/door.webp';
import ArrowWithCircle from '@/components/arrowWithCircle/arrowWithCircle';
import Image from 'next/image';
import HelpChooseDialog from '@/components/dialogs/helpChooseDialog';

const Hero: FC = () => {
  const [isHelpChooseDialogOpen, setIsHelpChooseDialogOpen] = useState(false);

  const handleHelpChooseDialogStatus = (isOpen: boolean) => {
    setIsHelpChooseDialogOpen(isOpen);
  };

  return <section className='relative py-16 md:py-36'>
    <div className='leftContainer absolute top-0 w-screen h-full max-w-[100vw] bg-black -z-20' />
    <div className='max-esm:max-w-[69%]'>
      <div className='flex flex-col gap-y-2.5'>
        <h6 className='text14-24 text-white esm:max-w-[18em] xl:max-w-[25em]'>Delivery and installation of Expert entrance doors is carried out in Moscow and Moscow region</h6>
        <p className='text12-16 text-grey2 esm:max-w-[18em]'>Delivery to other regions you can coordinate with our manager.</p>
      </div>
      <ArrowWithCircle
        className='text-white mt-4 max-w-[250px]'
        text='Help choose'
        color='white'
        width='full'
        circleSize={50}
        onClick={() => handleHelpChooseDialogStatus(true)}
      />
    </div>
    <Image className='absolute top-0 -right-52 h-full w-auto -z-10 esm:-right-[11.5rem] md:-right-[8.5rem] lg:-right-[calc((100vw_-_100%)_/_2)] 2xl:right-0' src={doorImg} alt='door' priority />
    <HelpChooseDialog open={isHelpChooseDialogOpen} type='deliveryAndInstallation' onOpenChange={handleHelpChooseDialogStatus} initialStage={3} />
  </section>
};

export default Hero;
import { FC } from 'react';
import bgMobile from '../../../public/imgs/pages/main/hero/bg_mobile.webp';
import bgPc from '../../../public/imgs/pages/main/hero/bg_pc.webp';
import ArrowWithCircle from '@/components/arrowWithCircle/arrowWithCircle';
import Advantage from './advantage';
import ScreenBg from '@/components/screenBg';

const advantages = [
  'Design for any idea',
  'European materials',
  'Italian fittings',
  'Lifetime hacking guarantee',
];

const Hero: FC = () => {
  let Advantages = advantages.map((a, i) => <Advantage text={a} key={i} />);

  return <section className='relative flex flex-col mt-0 esm:pb-10 md:h-screen md:pb-0 md:justify-evenly'>
    <ScreenBg className='max-lg:hidden' src={bgPc} alt='Background' />
    <div className='flex flex-col justify-center min-h-[350px] max-esm:relative'>
      <ScreenBg className='lg:hidden' src={bgMobile} alt='Background' />
      <div className='max-md:mt-[10%]'>
        <h4 className='font-robodron font-medium tracking-widest text-[min(8.8cqw,_113px)] text-[rgba(255,_255,_255,_0.15)]'>Expert</h4>
        <ArrowWithCircle className='text-white mt-5 md:mt-7' color='white' circleSize={50}>Get a consultation</ArrowWithCircle>
      </div>
    </div>
    <div className='relative grid esm:grid-cols-[repeat(2,max-content)] esm:gap-x-10 esm:gap-y-2.5 md:grid-cols-[repeat(4,max-content)] md:gap-x-0 md:justify-between'>
      <span className='leftContainer absolute top-0 w-screen bg-grey2 h-px max-md:hidden' />
      {Advantages}
    </div>
  </section>
};

export default Hero;
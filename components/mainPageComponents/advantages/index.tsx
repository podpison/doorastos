import { FC } from 'react';
import advantage1 from '../../../public/imgs/pages/main/advantages/1.png';
import advantage2 from '../../../public/imgs/pages/main/advantages/2.png';
import advantage3 from '../../../public/imgs/pages/main/advantages/3.png';
import Advantage from './advantage';
import SectionHeading from '@/components/sectionHeading';
import { StaticImageData } from 'next/image';

const items = [
  {
    heading: 'Expert is about achieving the highest goals in the market',
    description: 'That\'s why we have the most advanced materials in our arsenal. If you need a unique design, a unique color and sophisticated technical equipment, Expert will be happy to offer a solution for you. ',
    img: advantage1,
  },
  {
    heading: 'The front door is the entrance to your home, so we take security seriously',
    description: 'Industry-leading safety features such as tempered safety glass, hinges and hooks. To do this, our doors had to be tested for all aspects of security.',
    img: advantage2,
    className: 'esm:flex esm:flex-col md:max-w-[22em] md:[&>img]:min-h-[600px] smlg:[&>div]:max-w-[500px] smlg:max-w-[500px] smlg:[&>img]:min-h-[700px]'
  },
  {
    heading: 'Expert entrance doors are made to measure, making them more heat efficient',
    description: 'Our Class A+21 PVC doors are the warmest and safest available. We\'re also less tolerant of gaps than other vendors, so we use custom trim around the door frame for a neater finish and to keep cold air and heat out.',
    img: advantage3,
    className: 'esm:[&>img]:min-h-[350px] md:flex md:flex-col md:max-w-[22em] md:ml-auto md:[&>img]:min-h-[450px] smlg:[&>div]:max-w-[500px] smlg:max-w-[700px] smlg:[&>img]:min-h-[500px]',
  },
];

export type MainPageAdvantageType = {
  heading: string
  description: string
  img: StaticImageData
}

const Advantages: FC = () => {
  let Items = items.map((i, index) => <Advantage {...i} key={index} />);

  return <section className='mt130-300'>
    <SectionHeading>Advantages</SectionHeading>
    <div className='flex flex-col gap-y-32 esm:gap-y-36 smlg:gap-y-[200px]'>
      {Items}
    </div>
  </section>
};

export default Advantages;
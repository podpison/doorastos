import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

const signs = [
  'Production',
  'Delivery and installation of entrance doors'
];

const InitializationScreen: FC = () => {
  const [sign, setSign] = useState<string | null>(null);

  useEffect(() => {
    setSign(new Date().getMinutes() % 2 == 0 ? signs[0] : signs[1]);
  }, []);

  return <div className='mainContainer fixed top-0 left-0 flex flex-col justify-center min-h-screen min-w-full z-[100]'>
    <div className='absolute left-0 top-0 bg-black w-screen h-screen max-w-[100vw] -z-20' />
    <h2 className='font-robodron font-medium tracking-widest text-[min(8.8cqw,_113px)] text-[rgba(255,_255,_255,_0.15)] text-center'>Expert</h2>
    <div className='py-7 border-y border-grey1 mt-12'>
      <p className={cn('text-light text-grey4 text-center', !sign && 'w-24 h-6 bg-grey1 animate-pulse mx-auto')}>{sign}</p>
    </div>
  </div>
};

export default InitializationScreen;
import { FC } from 'react';
import Options from './options';
import { AdditionalProductOptionType } from '@/redux/reducers/static';

type Props = {
  activeOptions: AdditionalProductOptionType[]
  setActiveOption: (items: AdditionalProductOptionType) => void
}

const AdditionalOptions: FC<Props> = ({ activeOptions, setActiveOption }) => {

  return <section className='mt150-250 relative py-7 md:py-12'>
    <div className='leftContainer absolute top-0 w-screen h-full max-w-[100vw] bg-grey3 -z-20' />
    <Options activeItems={activeOptions} setActiveItems={setActiveOption} />
  </section>
};

export default AdditionalOptions;
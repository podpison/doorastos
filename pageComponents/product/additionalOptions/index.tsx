import { FC } from 'react';
import Options from './options';
import { AdditionalProductOptionType } from './options/item';

type Props = {
  items: AdditionalProductOptionType[]
  activeOptions: AdditionalProductOptionType[]
  setActiveOption: (items: AdditionalProductOptionType) => void
}

const AdditionalOptions: FC<Props> = ({ items, activeOptions, setActiveOption }) => {

  return <section className='mt100-150 relative py-7 md:py-12'>
    <div className='leftContainer absolute top-0 w-screen h-full max-w-[100vw] bg-grey3 -z-20' />
    <Options items={items} activeItems={activeOptions} setActiveItems={setActiveOption} />
  </section>
};

export default AdditionalOptions;
import getPriceWithDiscount from '@/helpers/getPriceWithDiscount';
import { ProductType } from '@/redux/reducers/static';
import Image from 'next/image';
import { FC, useState } from 'react';
import cn from 'classnames';
import HelpChooseDialog from '@/components/dialogs/helpChooseDialog';
import BookAMeasurement from './bookAMeasurement';
import textToURL from '@/helpers/textToURL';
import capitalizeFirstLetter from '@/helpers/capitalizeFirstLetter';

type Props = {
  item: ProductType | undefined
}

const Hero: FC<Props> = ({ item }) => {
  const [activeHCDType, setActiveHCDType] = useState<string | null>(null); // HCD - help choose dialog

  let finalPrice = getPriceWithDiscount(item?.price, item?.discount?.value);

  let expiryDate = new Date(item?.discount?.expiryDate || '');
  let formattedExpiryDate = expiryDate && new Date(expiryDate).toLocaleDateString('ru');

  const onHCDStatusChange = (status: boolean) => !status && setActiveHCDType(null)

  if (!item) {
    return <></>
  };

  return <section className='grid md:items-center sm:grid-cols-2 sm:gap-x-10 sm:border-y sm:border-line sm:py-5 md:py-10'>
    <div className='max-sm:py-5 max-sm:border-y max-sm:border-line'>
      <Image className='w-[54%] max-w-[275px] max-h-[540px] mx-auto md:w-[62%] smlg:w-full smlg:ml-0' src={item.img} alt='Door' width={275} height={540} priority />
    </div>
    <div className='max-sm:mt-7 sm:col-[1] sm:row-[1]'>
      <div className='flex flex-col gap-y-1 max-sm:items-center'>
        <h2>{item.name}</h2>
        <p className='text-esm text-grey2'>{item.material}</p>
      </div>
      <p
        className={cn(
          'flex items-center mt-5 max-sm:justify-center sm:mt-7',
          item.discount && 'gap-x-2.5 max-sm:flex-col sm:gap-y-0.5'
        )}
      >
        {item?.discount && <span className='text-esm text-grey2 line-through'>{item.price} ₽</span>}
        <span className='text18-20'>{finalPrice} ₽</span>
      </p>
      {item.discount &&
        <div className='flex flex-col gap-y-2.5 mt-2.5 max-sm:items-center md:mt-5'>
          <div className='bg-red w-fit py-2 px-8 md:py-2.5 md:px-10'>
            <p className='text-esm text-white'>You will save {item.price - finalPrice} ₽</p>
          </div>
          <small className='text-tiny text-grey2'>* Discount valid untill {formattedExpiryDate}</small>
        </div>
      }
      <BookAMeasurement onClick={() => setActiveHCDType('bookAMeasurement' + capitalizeFirstLetter(textToURL(item.name)))} />
      <button className='group flex border border-x-transparent border-grey4 w-fit transition-colors py-2.5 px-5 mt-5 hover:border-x-grey4 hover:border-y-transparent max-sm:mx-auto' onClick={() => setActiveHCDType('consultation')}>
        <span className='text-esm transition-colors'>Get a consultation</span>
      </button>
    </div>

    <HelpChooseDialog open={activeHCDType !== null} type={activeHCDType || ''} onOpenChange={onHCDStatusChange} initialStage={3} />
  </section>
};

export default Hero;
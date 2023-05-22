import { ProductType } from '@/redux/reducers/static';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import getPriceWithDiscount from '@/helpers/getPriceWithDiscount';

type Props = {

} & ProductType

const Item: FC<Props> = ({ name, img, price, material, id, discount }) => {
  let finalPrice = getPriceWithDiscount(price, discount);

  return <Link className='group' href={`/catalog/${id}`} data-price={finalPrice}>
    <div className='relative flex flex-col items-center gap-y-5 bg-grey3 transition-colors py-12 group-hover:bg-line group-active:bg-grey4'>
      {discount && <p className='absolute top-0 left-0 text-esm text-white bg-blue1 py-3 px-1.5 md:px-2 md:py-4'>-{discount}%</p>}
      <div className='flex flex-col items-center gap-y-1'>
        <h6 className='text14-18'>{name}</h6>
        <p className='text-esm text-grey2'>{material}</p>
      </div>
      <Image src={img} alt={`the ${name} door`} width={160} height={336} priority />
    </div>
    <div className='flex items-end justify-end gap-x-2.5 mt-2.5 md:gap-x-4'>
      {discount && <p className='text-esm text-grey2 line-through'>{price} ₽</p>}
      <p className='text14-16'>{finalPrice} ₽</p>
    </div>
  </Link>
};

export default Item;
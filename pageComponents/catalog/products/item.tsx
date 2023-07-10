import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import getPriceWithDiscount from '@/helpers/getPriceWithDiscount';
import { ProductType } from '@/pages/catalog/[id]';

type Props = {

} & ProductType

const Item: FC<Props> = ({ name, imgs, price, material, id, discount, isUnique }) => {
  let finalPrice = getPriceWithDiscount(price, discount?.value);

  return <Link className='group' href={`/catalog/${id}`} data-price={finalPrice} aria-label={`${name} door`}>
    <div className='relative flex flex-col items-center gap-y-5 bg-grey3 transition-colors py-12 group-hover:bg-line group-active:bg-grey4'>
      {discount && <p className='absolute top-0 left-0 text-esm text-white bg-blue1 py-3 px-1.5 md:px-2 md:py-4'>-{discount.value}%</p>}
      {isUnique && <p className='absolute top-0 right-0 text-esm text-white bg-blue1 py-3 px-1.5 md:px-2 md:py-4'>Unique</p>}
      <div className='flex flex-col items-center gap-y-1'>
        <h6 className='text14-18'>{name}</h6>
        <p className='text-esm text-grey2'>{material}</p>
      </div>
      <Image src={imgs[0]} alt={`the ${name} door`} width={160} height={336} priority />
    </div>
    <div className='flex items-end justify-end gap-x-2.5 mt-2.5 md:gap-x-4'>
      {discount && <p className='text-esm text-grey2 line-through'>{price} ₽</p>}
      <p className='text14-16'>{finalPrice} ₽</p>
    </div>
  </Link>
};

export default Item;
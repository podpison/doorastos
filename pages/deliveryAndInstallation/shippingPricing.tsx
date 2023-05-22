import { FC } from 'react';

const ShippingPricing: FC = () => {
  return <div className='mt100-150'>
    <h6 className='text14-24 max-w-[32em]'>The cost of products from the "Expert" plant includes delivery and installation to your place (no further than 30 km from MKAD).</h6>
    <div className='max-w-[500px]'>
      <div className='border-y border-line py-2.5 mt-5'>
        <p className='text12-16'>Delivery is carried out on specialized vehicles, by drivers who have undergone special training.</p>
      </div>
      <div className='flex flex-col gap-y-2.5 mt-7'>
        <p className='text-esm'>If the installation site is located further than 30 km from the Moscow Ring Road, then the cost of delivery is calculated at a special rate.</p>
        <div className='w-full bg-line py-2.5'>
          <p className='text-center text-[18px]'>1km / 25₽</p>
        </div>
      </div>
    </div>
  </div>
};

export default ShippingPricing;
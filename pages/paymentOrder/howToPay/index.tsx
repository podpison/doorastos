import { FC } from 'react';
import Steps from './steps';
import Breadcrumbs from '@/components/breadcrumbs';
import { BreadcrumbsItemType } from '@/components/breadcrumbs/item';

const breadcrumbItems: BreadcrumbsItemType[] = [
  {
    name: 'Payment order'
  }
];

const HowToPay: FC = () => {
  return <section>
    <Breadcrumbs items={breadcrumbItems} />
    <div>
      <h2>How to pay for Expert doors?</h2>
      <div className='flex flex-col gap-y-2.5 max-w-[780px] mt-5'>
        <p className='text14-16 text-grey1'>We care about our customers, so you can pay for goods from our catalog both in cash and by bank cards. Partial payment for the product you have chosen is carried out after the conclusion of the contract, which can be signed when a specialist arrives at your home for measurement.</p>
        <p className='text14-16 text-grey1'>In addition to the standard contract that determines the order of services, an application is also filled out with a description of all the parameters of the selected door. An amount equal to the price of the product at the time of conclusion of the contract is subject to payment;</p>
      </div>
    </div>
    <Steps />
  </section>
};

export default HowToPay;
import { ProductType } from '@/redux/reducers/static';
import { FC } from 'react';
import SectionItem from './sectionItem';

type Props = {
  data: ProductType['characteristics']['accessories']
}

const Accessories: FC<Props> = ({ data }) => {

  return <div className='mt-7'>
    <SectionItem name='Hardware color' value={data?.hardwareColor} />
    <SectionItem name='Pen' value={data?.pen} />
    <SectionItem name='Closer' value={data?.closer} />
    <SectionItem name='Threshold' value={data?.threshold} />
    <SectionItem name='Hinge decor' value={data?.hingeDecor} />
  </div>
};

export default Accessories;
import { FC } from 'react';
import SectionItem from './sectionItem';
import { ProductType } from '@/pageComponents/catalog/products/item';

type Props = {
  data: ProductType['characteristics']['general']
}

const General: FC<Props> = ({ data }) => {

  return <div className='mt-7'>
    <SectionItem name='Manufacturer' value={data?.manufacturer} />
    <SectionItem name='Product name' value={data?.productName} />
    <SectionItem name='Opening direction' value={data?.openingDirection} />
    <SectionItem name='Opening side' value={data?.openingSide} />
    <SectionItem name='Door leaf thickness' value={data?.leafThickness} />
    <SectionItem name='Door frame type' value={data?.frameType} />
    <SectionItem name='Sound insulation index' value={data?.soundInsulationIndex} />
    <SectionItem name='Individual door size, height' value={data?.height} />
    <SectionItem name='Individual door size, width' value={data?.width} />
    <SectionItem name='Door Weight (Minimum)' value={data?.weight} />
  </div>
};

export default General;
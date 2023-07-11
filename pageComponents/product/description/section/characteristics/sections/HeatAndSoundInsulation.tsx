import { FC } from 'react';
import SectionItem from './sectionItem';
import { ProductType } from '@/pageComponents/catalog/products/item';

type Props = {
  data: ProductType['characteristics']['heatAndSoundInsulation']
}

const HeatAndSoundInsulation: FC<Props> = ({ data }) => {

  return <div className='mt-7'>
    <SectionItem name='Door leaf filler' value={data?.doorLeafFiller} />
    <SectionItem name='Filler layer thickness' value={data?.fillerLayerThickness} />
    <SectionItem name='Flammability class of the filler' value={data?.flammabilityClassOfTheFiller} />
    <SectionItem name='Application temperature of the filler' value={data?.applicationTemperatureOfTheFiller} />
    <SectionItem name='door frame insulation' value={data?.doorFrameInsulation} />
  </div>
};

export default HeatAndSoundInsulation;